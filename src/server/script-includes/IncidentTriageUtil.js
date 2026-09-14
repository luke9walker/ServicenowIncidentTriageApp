var IncidentTriageUtil = Class.create()
IncidentTriageUtil.prototype = {
    initialize: function () {},

    /**
     * Analyzes the incident description and short description to determine the appropriate
     * assignment group based on configured triage rules.
     * @param {GlideRecord} incidentGr - The incident GlideRecord
     * @returns {string} - The sys_id of the matched assignment group, or empty string if no match
     */
    triageIncident: function (incidentGr) {
        var description = (incidentGr.getValue('description') || '').toLowerCase()
        var shortDescription = (incidentGr.getValue('short_description') || '').toLowerCase()
        var combinedText = shortDescription + ' ' + description

        var ruleGr = new GlideRecord('x_2218530_it_incid_triage_rule')
        ruleGr.addQuery('active', true)
        ruleGr.orderBy('order')
        ruleGr.query()

        while (ruleGr.next()) {
            var keywords = ruleGr.getValue('keyword')
            if (this._matchesKeywords(combinedText, keywords)) {
                gs.info(
                    'IncidentTriageUtil: Matched triage rule "' +
                        keywords +
                        '" for incident ' +
                        incidentGr.getValue('number')
                )
                return ruleGr.getValue('assignment_group')
            }
        }

        gs.info(
            'IncidentTriageUtil: No triage rule matched for incident ' +
                incidentGr.getValue('number')
        )
        return ''
    },

    /**
     * Checks if the combined text matches any of the keywords in the rule.
     * Keywords can be comma-separated. All keywords in a single rule entry must match (AND logic).
     * @param {string} text - The combined incident text (lowercased)
     * @param {string} keywords - Comma-separated keywords from the triage rule
     * @returns {boolean} - True if all keywords are found in the text
     */
    _matchesKeywords: function (text, keywords) {
        if (!keywords) return false

        var keywordList = keywords.split(',')
        for (var i = 0; i < keywordList.length; i++) {
            var keyword = keywordList[i].trim().toLowerCase()
            if (keyword && text.indexOf(keyword) === -1) {
                return false
            }
        }
        return true
    },

    type: 'IncidentTriageUtil',
}
