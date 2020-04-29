export const CityForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state'
  },
]