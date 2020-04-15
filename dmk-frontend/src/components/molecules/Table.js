import React, { useState } from 'react';

// MUI
import MUIDataTable from "mui-datatables";
import TextField from "@material-ui/core/TextField";

const Table = () =>  {
  const [tableData, setTableData] = useState({
    columns: ["Name", "Company", "City", "State"],

    data: [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ],

    options: {
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
  });

  return (
    <MUIDataTable
      title={''}
      data={tableData.data}
      columns={tableData.columns}
      options={tableData.options}
    />
  );
}

export default Table;