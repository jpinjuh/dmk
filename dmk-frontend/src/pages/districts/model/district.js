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