export const DistrictForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete'
  },
]

export const EditForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete'
  },
]