import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData as getRoles } from "Modules/units/Roles";
import { getData as getStates} from "Modules/units/States";
import { getData as getPrivileges } from "Modules/units/Privileges";
import { getData as getPermissions} from "Modules/units/Permissions";
import { getData as getCities } from "Modules/units/Cities";
import { getData as getDistricts} from "Modules/units/Districts";
import { useHistory, useLocation } from "react-router-dom";

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";
import CustomFooter from "Components/molecules/CustomFooter";
import CustomSearch from "Components/molecules/CustomSearch";

// MUI
import MUIDataTable from "mui-datatables";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Divider } from '@material-ui/core';

// Organisms
import EditModal from 'Components/organisms/EditModal'
import DeleteModal from 'Components/organisms/DeleteModal'

const Table = ({ data, model }) => {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState('');
  const [item, setItem] = useState('');
  const [searchVal, setSearchVal] = useState('');
  let tableData = useSelector(state => state.roles);
  const dispatch = useDispatch();

  const columns = [
    ...model,
    {
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
                    onClick={() => { setOpen(true); setItemId(value); setItem(tableMeta.rowData) }}
                  />
                </Box>
                <Box>
                  <ButtonWithIcon
                    label={'Obriši'}
                    icon={"delete"}
                    onClick={() => { setDeleteOpen(true); setItemId(value) }}
                  />
                </Box>
              </Box>
            </div>
          );
        }
      }
    }
  ]

  switch(location.pathname) {
    case '/role':
      useEffect(() => {
        dispatch(getRoles())
      }, [])
      break;
    case '/države':
      useEffect(() => {
        dispatch(getStates())
      }, [])
      break;
    case '/privilegije':
      useEffect(() => {
        dispatch(getPrivileges())
      }, [])
      break;
    case '/prava':
      useEffect(() => {
        dispatch(getPermissions())
      }, [])
      break;
    case '/gradovi':
      useEffect(() => {
        dispatch(getCities())
      }, [])
      break;
    case '/župe':
      useEffect(() => {
        dispatch(getDistricts())
      }, [])
      break;
    default:
      console.log("not working")
  }
  
  const options = {
    elevation: 0,
    print: false,
    download: false,
    viewColumns: false,
    customToolbar: null,
    searchOpen: true,
    count: tableData.total,
    selectableRows: 'none',
    searchText: searchVal,
    customSearchRender: (searchText, handleSearch, hideSearch, options) => {
      return (
        <CustomSearch
          searchText={searchText}
          onSearch={handleSearch}
          onHide={hideSearch}
          options={options}
        />
      );
    },
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
      return (
        <CustomFooter
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          changeRowsPerPage={changeRowsPerPage}
          changePage={changePage}
          textLabels={textLabels} />
      );
    },
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'search':
          setSearchVal(tableState.searchText)
          break;
      }
    },
  }

  return (
    <>
      {data.data &&
        <MUIDataTable
          title={''}
          data={tableData.data}
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