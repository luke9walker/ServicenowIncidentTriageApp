import { Table, StringColumn, ReferenceColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_2218530_it_incid_triage_rule = Table({
    name: 'x_2218530_it_incid_triage_rule',
    label: 'Triage Rule',
    display: 'keyword',
    schema: {
        keyword: StringColumn({
            label: 'Keyword',
            mandatory: true,
            maxLength: 200,
        }),
        assignment_group: ReferenceColumn({
            label: 'Assignment Group',
            referenceTable: 'sys_user_group',
            mandatory: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        order: IntegerColumn({
            label: 'Order',
            default: 100,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 500,
        }),
    },
})
