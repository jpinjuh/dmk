import React, { useState } from 'react';
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
// MUI
import MUIDataTable from "mui-datatables";
import TextField from "@material-ui/core/TextField";
import { Divider } from '@material-ui/core';

const Table = ({data, model}) =>  {

  //console.log(data.data)
  console.log(model)
  const columns = [...model, {
    name: "id",
    label: "Actions",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => {
        return (
          <div>
            <Box p={1} display="flex">
              <Box px={2}>
                <Button 
                  color="primary" 
                  variant="contained"
                  disableElevation
                >Delete</Button>
              </Box>
              <Box>
                <Button 
                  color="primary" 
                  variant="contained"
                  disableElevation
                >Edit</Button>
              </Box>
            </Box>
          </div>                       
        );
      }
    }
  }]
  const [tableData, setTableData] = useState({
  

    /*data: [
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
    ],*/

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
  if(data.data)
  console.log(Object.keys(data.data[0]))

  return (
    <>
     {data.data &&
        
      <MUIDataTable
    title={''}
    data={data.data}
    columns={columns}
    options={tableData.options}
     />}
    </>
    
  );
}

export default Table;