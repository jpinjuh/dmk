export const DistrictForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false
  },
  {
    label: 'Adresa',
    type: 'text',
    disabled: false,
    name_in_db: 'address',
    validation: null,
    error: false
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Biskupija',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'archdiocese',
    service: 'archdiocese/autocomplete',
    validation: null,
    error: false
  },
]

export const EditForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
    validation: null,
    error: false
  },
  {
    label: 'Adresa',
    type: 'text',
    disabled: false,
    name_in_db: 'address',
    validation: null,
    error: false
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Biskupija',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'archdiocese',
    service: 'archdiocese/autocomplete',
    validation: null,
    error: false
  }
]