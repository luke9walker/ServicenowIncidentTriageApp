import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IncidentTriageUtil'],
    name: 'IncidentTriageUtil',
    script: Now.include('../../server/script-includes/IncidentTriageUtil.js'),
    description:
        'Analyzes incident descriptions against configured triage rules and determines the appropriate assignment group.',
    active: true,
    accessibleFrom: 'package_private',
})
