export const PrivilegeTableData = [
    {
        label: 'Rola',
        name: 'role.name',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Pravo',
        name: 'permission.name',
        options: {
            filter: true,
            sort: true,
           }
    }
    ]

export const PrivilegeForm = [
  {
    label: 'Rola',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'role',
    service: 'role/autocomplete'
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete'
  },
]
