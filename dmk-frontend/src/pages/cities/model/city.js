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
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'state',
    service: 'state/autocomplete'
  },
]