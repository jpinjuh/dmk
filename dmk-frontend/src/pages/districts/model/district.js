export const DistrictTableData = [
    {
        label: 'Naziv župe',
        name: 'name',
        options: {
            filter: true,
            sort: true,
           }
    },
    ]
  
export const Districtform = [
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