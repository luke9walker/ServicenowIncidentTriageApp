import { gs, GlideRecord } from '@servicenow/glide'

export function triageIncident(current: GlideRecord<'incident'>, previous: GlideRecord<'incident'>) {
    // Only triage if assignment_group is not already set
    var assignmentGroup = current.getValue('assignment_group')
    if (assignmentGroup) {
        return
    }

    var triageUtil = new GlideRecord('x_2218530_it_incid_triage_rule')
    triageUtil.addQuery('active', true)
    triageUtil.orderBy('order')
    triageUtil.query()

    var description = (current.getValue('description') || '').toLowerCase()
    var shortDescription = (current.getValue('short_description') || '').toLowerCase()
    var combinedText = shortDescription + ' ' + description

    while (triageUtil.next()) {
        var keywords = triageUtil.getValue('keyword')
        if (matchesKeywords(combinedText, keywords)) {
            var groupSysId = triageUtil.getValue('assignment_group')
            gs.info(
                'Incident Triage: Matched rule "' +
                    keywords +
                    '" - assigning incident ' +
                    current.getValue('number') +
                    ' to group ' +
                    groupSysId
            )
            current.setValue('assignment_group', groupSysId)
            return
        }
    }

    gs.info(
        'Incident Triage: No matching triage rule found for incident ' +
            current.getValue('number')
    )
}

function matchesKeywords(text: string, keywords: string): boolean {
    if (!keywords) return false

    var keywordList = keywords.split(',')
    for (var i = 0; i < keywordList.length; i++) {
        var keyword = keywordList[i].trim().toLowerCase()
        if (keyword && text.indexOf(keyword) === -1) {
            return false
        }
    }
    return true
}
