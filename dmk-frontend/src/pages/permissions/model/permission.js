export const PermissionForm = [
  {
    label: 'Naziv prava',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Ruta',
    type: 'text',
    disabled: false,
    name_in_db: 'route',
  },
  {
    label: 'Metoda',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'method',
    service: 'methods',
  },
]  

export const EditForm = [
  {
    label: 'Naziv prava',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Ruta',
    type: 'text',
    disabled: false,
    name_in_db: 'route',
  },
  {
    label: 'Metoda',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'method',
    service: 'methods',
  },
]