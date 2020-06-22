export const DeceasedForm = [
  {
    label: 'Datum smrti',
    type: 'date',
    disabled: false,
    name_in_db: 'date_of_death',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Mjesto smrti',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'place_of_death',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Osoba',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Mjesto pokopa',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'place_of_burial',
    service: 'listItem?list_id=1cb9f951-1059-4c17-ba30-b1846dd98b97',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Datum pokopa',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Crkveni službenik sprovoda',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete',
    validation: null,
    error: false,
    value: ''
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
  }
]

export const NoteForm = [
  {
    label: 'Bilješke',
    type: 'multiline',
    disabled: false,
    name_in_db: 'other_notes',
    validation: null,
    error: false
  }
]

export const EditForm = [
  {
    label: 'Ostale bilješke',
    type: 'multiline',
    disabled: false,
    name_in_db: 'other_notes',
    validation: null,
    error: false
  }
]