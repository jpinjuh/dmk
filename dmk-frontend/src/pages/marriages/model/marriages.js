export const MarriageForm = [
  {
    label: 'Zaručnik',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Zaručnica',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person2',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Svjedok zaručnika',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'best_man',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Svjedok zaručnice',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'best_man2',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Datum vjenčanja',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false
  },
  {
    label: 'Vjenčatelj',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user/autocomplete',
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
    label: 'Ostale Bilješke',
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