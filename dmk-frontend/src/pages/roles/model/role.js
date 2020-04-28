import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

export const RoleTableData = [
  {
    label: 'Naziv role',
    name: 'name',
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

export const RoleForm = [
  {
    label: 'Naziv role',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
]