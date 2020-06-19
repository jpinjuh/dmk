export const DistrictForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Adresa',
    type: 'text',
    disabled: false,
    name_in_db: 'address',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Biskupija',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'archdiocese',
    service: 'archdiocese',
    validation: null,
    error: false,
    value: null
  },
]

export const EditForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Adresa',
    type: 'text',
    disabled: false,
    name_in_db: 'address',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Biskupija',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'archdiocese',
    service: 'archdiocese',
    validation: null,
    error: false,
    value: null
  }
]