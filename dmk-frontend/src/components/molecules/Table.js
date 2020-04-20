import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

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
            <Box display="flex">
              <Box mr={3}>
                <ButtonWithIcon 
                  label={'Uredi'}
                  icon={"edit"}
                  onClick={() => {setOpen(true); setItemId(value); setItem(tableMeta.rowData)}} 
                />
              </Box>
              <Box>
                <ButtonWithIcon 
                  label={'Obriši'}
                  icon={"delete"}
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