export const User = [
    {
        label: 'Ime',
        name: 'first_name',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Prezime',
        name: 'last_name',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Korisničko ime',
        name: 'username',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Email',
        name: 'email',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Rola',
        name: 'role.name',
        options: {
            filter: true,
            sort: true,
           }
    },
    {
        label: 'Župa',
        name: 'district.name',
        options: {
            filter: true,
            sort: true,
           }
    }
    ]

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
  },
  {
    label: 'Uloga',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'role',
    service: 'role/autocomplete'
  },
  {
    label: 'Župa',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'district',
    service: 'district/autocomplete'
  },
]