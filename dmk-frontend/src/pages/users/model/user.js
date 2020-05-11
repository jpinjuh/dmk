export const UserForm = [
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
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: null,
    error: false
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: null,
    error: false
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_hash',
    value: '',
    validation: null,
    error: false
  },
  {
    label: 'Uloga',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
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
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: null,
    error: false
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: null,
    error: false
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_hash',
    value: '',
    validation: null,
    error: false
  },
  {
    label: 'Uloga',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role',
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
]