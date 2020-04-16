import React, { useState } from 'react';

// MUI
import MUIDataTable from "mui-datatables";
import TextField from "@material-ui/core/TextField";

const Table = ({data}) =>  {

  if(data.data)
  console.log(data.data)
  const columns = [
    {
     name: "created_at",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "id",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    }]

  const options= {
    elevation: 0,
    print: false,
    download: false,
    viewColumns: false,
    customToolbar: null,
    searchOpen: true,
    /* customSearchRender: (searchText, handleSearch, hideSearch, options) => {
      return (
        <TextField
        />
      );
    }, */
    responsive: '',
  }
  const [tableData, setTableData] = useState({


    data: [data.data && data.data],


  });

  if(data.data)
  setTableData(data.data)
  console.log(tableData)
  return (
    <MUIDataTable
      title={''}
      data={tableData.data}
      columns={columns}
      options={options}
    />
  );
}

export default Table;