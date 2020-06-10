export const PrivilegeForm = [
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete',
    validation: null,
    error: false,
    value: ''
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
    error: false,
    value: ''
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission',
    service: 'permission/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
]
