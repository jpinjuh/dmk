export const PrivilegeForm = [
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
    validation: null,
    error: false
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete',
    validation: null,
    error: false
  },
]

export const EditForm = [
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
    validation: null,
    error: false
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete',
    validation: null,
    error: false
  },
]
