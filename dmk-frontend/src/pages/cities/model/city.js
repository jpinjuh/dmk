export const CityForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state'
  },
]

export const EditForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state'
  },
]