export const PermissionTableData = [
  {
    label: 'Naziv permisije',
    name: 'name',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Ruta',
    name: 'route',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Metoda',
    name: 'method',
    options: {
      filter: true,
      sort: true,
    }
  }
]


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
    service: 'methods'
  },
]  