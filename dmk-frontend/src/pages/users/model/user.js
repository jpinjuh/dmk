export const UserForm = [
  {
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
  },
  {
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
  },
  {
    label: 'Email',
    type: 'text',
    disabled: false,
    name_in_db: 'email',
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_hash',
    value: ''
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