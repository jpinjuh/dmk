export const CityForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state',
    validation: null,
    error: false
  },
]

export const EditForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state',
    validation: null
  },
]