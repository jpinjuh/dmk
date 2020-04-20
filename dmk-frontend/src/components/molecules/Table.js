import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

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

const Table = ({data, model}) =>  {
  const [ open, setOpen] = useState(false);
  const [ deleteOpen, setDeleteOpen] = useState(false);
  const [ itemId, setItemId] = useState('');
  const [ item, setItem ] = useState('');

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
                  onClick={() => {setOpen(true); setItemId(value); setItem(tableMeta.rowData)}} 
                />
              </Box>
              <Box>
                <Button 
                  label={'Obriši'}
                  onClick={() => {setDeleteOpen(true); setItemId(value)}}
                />
              </Box>
            </Box>
          </div>                       
        );
      }
    }
  }]

  const options = {
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

  return (
    <>
      {data.data &&
        <MUIDataTable
          title={''}
          data={data.data}
          columns={columns}
          options={options}
      />}
      <EditModal
        onOpen={open} 
        closeModal={() => setOpen(false)}
        item={item}
        itemId={itemId}
      ></EditModal>

      <DeleteModal
        onDelete={deleteOpen} 
        closeDelete={() => setDeleteOpen(false)}
        itemId={itemId}
      ></DeleteModal>
    </>
    
  );
}

export default Table;