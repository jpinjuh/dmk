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
    },
    {
      label: 'Metoda',
      name: 'permission.method',
      options: {
          filter: true,
          sort: true,
         }
  }
    ]

export const PrivilegeForm = [
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role'
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete'
  },
]
