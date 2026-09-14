import { BusinessRule } from '@servicenow/sdk/core'
import { triageIncident } from '../../server/business-rules/triage-incident'

BusinessRule({
    $id: Now.ID['triage-incident-br'],
    name: 'Triage Incident Assignment',
    table: 'incident',
    when: 'before',
    action: ['insert', 'update'],
    order: 50,
    active: true,
    description:
        'Automatically analyzes incident description and assigns to the appropriate team based on configured triage rules.',
    script: triageIncident,
})
