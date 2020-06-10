export const PermissionForm = [
  {
    label: 'Naziv prava',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false,
    value: ""
  },
  {
    label: 'Ruta',
    type: 'text',
    disabled: false,
    name_in_db: 'route',
    validation: null,
    error: false,
    value: ""
  },
  {
    label: 'Metoda',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'method',
    service: 'listItem?list_id=177eda0f-dd0c-4531-a7dc-c7c9ceb1756a',
    validation: null,
    error: false,
    value: ''
  },
]  

export const EditForm = [
  {
    label: 'Naziv prava',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false
  },
  {
    label: 'Ruta',
    type: 'text',
    disabled: false,
    name_in_db: 'route',
    validation: null,
    error: false
  },
  {
    label: 'Metoda',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'method',
    service: 'listItem?list_id=177eda0f-dd0c-4531-a7dc-c7c9ceb1756a',
    validation: null,
    error: false
  },
]