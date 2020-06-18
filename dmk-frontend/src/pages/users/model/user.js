export const UserForm = [
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
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Titula',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'title',
    service: 'listItem?list_id=778bba91-813b-4c74-80b1-d0cde2f761ad',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Lozinka',
    type: 'password',
    disabled: false,
    name_in_db: 'password_hash',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
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
]

export const EditForm = [
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
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Titula',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'title',
    service: 'listItem?list_id=778bba91-813b-4c74-80b1-d0cde2f761ad',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: null,
    error: false,
    value: ''
  },
  {
    label: 'Rola',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
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
]