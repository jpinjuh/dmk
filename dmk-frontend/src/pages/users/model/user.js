export const UserForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: {error: null, text: ''}
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: {error: null, text: ''}
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_hash',
    value: '',
    validation: {error: null, text: ''}
  },
  {
    label: 'Uloga',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role'
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete'
  },
]

export const EditForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
    validation: {error: null, text: ''}
  },
  {
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
    validation: {error: null, text: ''}
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
    validation: {error: null, text: ''}
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_hash',
    value: '',
    validation: {error: null, text: ''}
  },
  {
    label: 'Uloga',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'role',
    service: 'role'
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete'
  },
]