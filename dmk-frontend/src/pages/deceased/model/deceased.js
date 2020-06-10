export const DeceasedForm = [
  {
    label: 'Datum smrti',
    type: 'date',
    disabled: false,
    name_in_db: 'date_of_death',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Mjesto smrti',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'place_of_death',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Osoba',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Datum pokopa',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Pokop obavio',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Svezak',
    type: 'text',
    disabled: false,
    name_in_db: 'volume',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Godina',
    type: 'number',
    disabled: false,
    name_in_db: 'year',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Strana',
    type: 'number',
    disabled: false,
    name_in_db: 'page',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Broj',
    type: 'number',
    disabled: false,
    name_in_db: 'number',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Groblje',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'place_of_burial',
    service: 'listItem?list_id=1cb9f951-1059-4c17-ba30-b1846dd98b97',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Bilješke',
    type: 'text',
    disabled: false,
    name_in_db: 'other_notes',
    validation: null,
    error: false,
    value: ''
  }
]

export const EditForm = [
  {
    label: 'Datum smrti',
    type: 'date',
    disabled: false,
    name_in_db: 'date_of_death',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Mjesto smrti',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'place_of_death',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Osoba',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Datum pokopa',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Pokop obavio',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Svezak',
    type: 'text',
    disabled: false,
    name_in_db: 'volume',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Godina',
    type: 'number',
    disabled: false,
    name_in_db: 'year',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Strana',
    type: 'number',
    disabled: false,
    name_in_db: 'page',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Broj',
    type: 'number',
    disabled: false,
    name_in_db: 'number',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Groblje',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'cemetery',
    service: 'listItem?list_id=1cb9f951-1059-4c17-ba30-b1846dd98b97',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Bilješke',
    type: 'text',
    disabled: false,
    name_in_db: 'other_notes',
    validation: null,
    error: false,
    value: ''
  }
  
]