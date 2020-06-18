export const ChrismForm = [
  {
    label: 'Datum krizme',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Krizmanik',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Kum/a',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'best_man',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Djelitelj krizme',
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
  }
]

export const EditForm = [
  {
    label: 'Datum krizme',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Krizmanik',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'person',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Kum/a',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'best_man',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: null
  },
  {
    label: 'Djelitelj krizme',
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
  }
]