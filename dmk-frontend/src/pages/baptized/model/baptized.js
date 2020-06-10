export const BaptizedForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
    validation: null,
    error: false,
    value: ''
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
    label: 'Mjesto rođenja',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'birth_place',
    service: 'city/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Prebivalište',
    type: 'text',
    disabled: false,
    name_in_db: 'domicile',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'JMBG',
    type: 'number',
    disabled: false,
    name_in_db: 'identity_number',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Otac',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'father',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Majka',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'mother',
    service: 'person/autocomplete',
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
    label: 'Religija',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'religion',
    service: 'listItem?list_id=47a17b46-b37e-4639-98eb-fb3c3d347721',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Datum krštenja',
    type: 'date',
    disabled: false,
    name_in_db: 'act_date',
    validation: null,
    error: false
  },
  {
    label: 'Krštenje obavio',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'act_performed',
    service: 'user/autocomplete',
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
  },
  {
    label: 'Kum',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'best_man',
    service: 'person/autocomplete',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Sin/Kći',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'child',
    service: 'listItem?list_id=ea83b091-0bd1-465f-a2dd-79499fee4364',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Roditelji kanonski vjenčani',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'parents_canonically_married',
    service: 'listItem?list_id=a5e4d6d8-6f27-4094-b06a-79d00bb98859',
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