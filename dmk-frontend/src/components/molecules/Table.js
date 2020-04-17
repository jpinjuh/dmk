import React, { useState, useEffect } from 'react';

// Atoms
import Button from "Components/atoms/buttons/Button";

// MUI
import MUIDataTable from "mui-datatables";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Divider } from '@material-ui/core';

// Organisms
import EditModal from 'Components/organisms/EditModal'
import DeleteModal from 'Components/organisms/DeleteModal'

import { getData } from "Modules/units/Roles";

const Table = ({data, model}) =>  {
  const [ open, setOpen] = React.useState(false);
  const [ deleteOpen, setDeleteOpen] = React.useState(false);

  const columns = [...model, {
    name: "id",
    label: "Akcije",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => {
        return (
          <div>
            <Box p={1} display="flex">
              <Box px={2}>
                <Button 
                  label={'Uredi'}
                  onClick={() => setOpen(true)} 
                />
              </Box>
              <Box>
                <Button 
                  label={'Obriši'}
                  onClick={() => setDeleteOpen(true)}
                />
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
      selectableRows: 'none',
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
    <>
      {data.data &&
        <MUIDataTable
          title={''}
          data={data.data}
          columns={columns}
          options={tableData.options}
      />}
      <EditModal
        onOpen={open} 
        closeModal={() => setOpen(false)} 
      ></EditModal>

      <DeleteModal
        onDelete={deleteOpen} 
        closeDelete={() => setDeleteOpen(false)} 
      ></DeleteModal>
    </>
    
  );
}

export default Table;