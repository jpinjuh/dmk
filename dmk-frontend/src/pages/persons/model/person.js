export const PersonForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
    validation: null,
    error: false
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
    validation: null,
    error: false
  },
  {
    label: 'Djevojačko prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'maiden_name',
    validation: null,
    error: false
  },
  {
    label: 'Datum rođenja',
    type: 'date',
    disabled: false,
    name_in_db: 'birth_date',
    validation: null,
    error: false
  },
  {
    label: 'JMBG',
    type: 'text',
    disabled: false,
    name_in_db: 'identity_number',
    validation: null,
    error: false
  },
  {
    label: 'Otac',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'father',
    service: 'person/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Majka',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'mother',
    service: 'person/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Religija',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'religion',
    service: 'listItem?list_id=1be5fd61-0cab-4c25-a78a-e81fa9ffc36a',
    validation: null,
    error: false
  },
]

export const EditForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
    validation: null,
    error: false
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
    validation: null,
    error: false
  },
  {
    label: 'Djevojačko prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'maiden_name',
    validation: null,
    error: false
  },
  {
    label: 'Datum rođenja',
    type: 'text',
    disabled: false,
    name_in_db: 'birth_date',
    validation: null,
    error: false
  },
  {
    label: 'JMBG',
    type: 'text',
    disabled: false,
    name_in_db: 'identity_number',
    validation: null,
    error: false
  },
  {
    label: 'Otac',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'father',
    service: 'person/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Majka',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'mother',
    service: 'person/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete',
    validation: null,
    error: false
  },
  {
    label: 'Religija',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'religion',
    service: 'listItem?list_id=1be5fd61-0cab-4c25-a78a-e81fa9ffc36a',
    validation: null,
    error: false
  },
]