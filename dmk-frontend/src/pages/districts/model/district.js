import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

export const DistrictTableData = [
  {
    label: 'Naziv župe',
    name: 'name',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Grad',
    name: 'city.name',
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

export const DistrictForm = [
  {
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'city',
    service: 'city/autocomplete'
  },
]