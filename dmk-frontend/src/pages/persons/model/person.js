import moment from "moment";

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
    error: false,
    value: moment()
  },
  {
    label: 'Mjesto rođenja',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'birth_place',
    service: 'city/autocomplete',
    validation: null,
    error: false
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
    type: 'dropdown',
    disabled: false,
    name_in_db: 'district',
    service: 'district',
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
  },
]

export const ExtraForm = [
  {
    label: 'Župa krštenja',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'baptism_district',
    service: 'district',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Datum krštenja',
    type: 'date',
    disabled: false,
    name_in_db: 'baptism_date',
    validation: null,
    error: false,
    value: moment()
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
    error: false,
    //value: ''
  },
  {
    label: 'JMBG',
    type: 'number',
    disabled: false,
    name_in_db: 'identity_number',
    validation: null,
    error: false
  },
  {
    label: 'Mjesto rođenja',
    type: 'text',
    disabled: false,
    name_in_db: 'birth_place',
    validation: null,
    error: false
  }
]