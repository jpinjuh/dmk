import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

export const CityTableData = [
  {
    label: 'Naziv grada',
    name: 'name',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    label: 'Država',
    name: 'state.name',
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

export const CitiesForm = [
  {
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'name',
  },
  {
    label: 'Država',
    type: 'dropdown',
    disabled: false,
    name_in_db: 'state',
    service: 'state'
  },
]