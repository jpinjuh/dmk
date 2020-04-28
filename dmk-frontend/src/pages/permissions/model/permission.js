import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

export const PermissionTableData = [
  {
    label: 'Naziv permisije',
    name: 'name',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Ruta',
    name: 'route',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Metoda',
    name: 'method',
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


export const PermissionForm = [
  {
    label: 'Naziv prava',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Ruta',
    type: 'text',
    disabled: false,
    name_in_db: 'route',
  },
  {
    label: 'Metoda',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'method',
    service: 'methods'
  },
]  