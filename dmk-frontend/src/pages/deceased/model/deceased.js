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
    name_in_db: 'domicile',
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
    type: 'dropdown',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user',
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
    label: 'Bilješke',
    type: 'text',
    disabled: false,
    name_in_db: 'other_notes',
    validation: null,
    error: false,
    value: ''
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
    service: 'listItem?list_id=47a17b46-b37e-4639-98eb-fb3c3d347721',
    validation: null,
    error: false
  }
]
/*
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
    label: 'Djevojačko ime',
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
    service: 'listItem?list_id=47a17b46-b37e-4639-98eb-fb3c3d347721',
    validation: null,
    error: false
  }
]

export const SearchForm = [
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
  }
]*/