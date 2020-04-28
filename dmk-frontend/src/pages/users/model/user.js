import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

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
  },
  {
    label: 'Aktivnost',
    name: 'status',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div>
            {(value === 1)
              ? <Chip label="Aktivan" color="primary" />
              : <Chip label="Neaktivan" disabled />
            }
          </div>
        );
      }
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