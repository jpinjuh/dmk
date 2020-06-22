import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";
import CustomFooter from "Components/molecules/CustomFooter";
import CustomSearch from "Components/molecules/CustomSearch";

// MUI
import MUIDataTable from "mui-datatables";
import { Box } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';

// Atoms 
import Button from 'Components/atoms/buttons/Button'

// Organisms
import EditModal from 'Components/organisms/users/EditModal'
import AddModal from 'Components/organisms/users/AddModal'
import DeactivateModal from 'Components/organisms/users/DeactivateModal'
import ActivateModal from 'Components/organisms/users/ActivateModal'
import UserPasswordModal from 'Components/organisms/users/UserPasswordModal'

// Actions
import { getData, getOneItem, searchData } from "Modules/units/Users";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false)
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [changePwdOpen, setChangePwdOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0)
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.users);

  const columns = [
    {
      label: 'Ime',
      name: 'first_name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Prezime',
      name: 'last_name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Korisničko ime',
      name: 'username',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Titula',
      name: 'title',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Email',
      name: 'email',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Rola',
      name: 'role.name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Župa',
      name: 'district.name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Aktivnost',
      name: 'status',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              {(value === 1)
                ? <Chip label="Aktivan" color="primary" />
                : <Chip label="Neaktivan" disabled />
              }
            </div>
          );
        }
      }
    },
    {
      name: "id",
      label: "Akcije",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              <Box display="flex">
                <Box mr={3}>
                  <ButtonWithIcon
                    label={'Uredi'}
                    icon={"edit"}
                    onClick={() => dispatch(getOneItem(`user/${value}`, setOpen))}
                  />
                </Box>
                <Box mr={3}>
                  <ButtonWithIcon
                    label={'Promjeni lozinku'}
                    icon={"vpn_key"}
                    onClick={() => dispatch(getOneItem(`user/${value}`, setChangePwdOpen))}
                  />
                </Box>
                <div>
                  {(tableMeta.rowData[tableMeta.rowData.length - 2] === 0)
                    ? <Box mr={3}>
                      <ButtonWithIcon
                        label={'Aktiviraj'}
                        icon={"visibility"}
                        onClick={() => dispatch(getOneItem(`user/${value}`, setActivateOpen))}
                      />
                    </Box>
                    : <Box>
                      <ButtonWithIcon
                        label={'Deaktiviraj'}
                        icon={"visibility_off"}
                        onClick={() => dispatch(getOneItem(`user/${value}`, setDeactivateOpen))}
                      />
                    </Box>
                  }
                </div>
              </Box>
            </div>
          );
        }
      }
    }
  ]

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
    getSearchData(searchVal)
   }
  }, [searchVal])

  useEffect(() => {
    changePage(page, rows);
  }, [page, rows])

  const changePage = (page, rows) => {
    dispatch(getData(`user?start=${page + 1}&limit=${rows}`))
  };

  const getSearchData = async value => {
    const body = {
      search: value
    };

    dispatch(searchData('user/search', body))
  };

  const options = {
    elevation: 0,
    print: false,
    download: false,
    viewColumns: false,
    customToolbar: null,
    filter: false,
    serverSide: true,
    count: tableData.total,
    selectableRows: 'none',
    rowsPerPage: rows,
    page: page,
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
    customToolbar: () => {
      return (
        <Button
          label="+ Dodaj korisnika"
          onClick={() => setOpenAdd(true)}
        />
      );
    },
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'search':
          setSearchVal(tableState.searchText)
          break;
        case 'changePage':
          setPage(tableState.page);
          break;
        case 'changeRowsPerPage':
          setRows(tableState.rowsPerPage);
          break;
      }
    },
  }

  return (
    <>
      {tableData.data &&
        <MUIDataTable
          title={'Popis korisnika'}
          data={tableData.data}
          columns={columns}
          options={options}
        />}

      <AddModal
        onOpen={openAdd}
        openEdit={() => setOpen(true)} 
        closeModal={() => setOpenAdd(false)} 
      ></AddModal>

      <EditModal
        onOpen={open}
        closeModal={() => setOpen(false)}
      ></EditModal>

      <UserPasswordModal
        onOpen={changePwdOpen}
        closeModal={() => setChangePwdOpen(false)}
      ></UserPasswordModal>

      <DeactivateModal
        onDeactivate={deactivateOpen}
        closeDeactivate={() => setDeactivateOpen(false)}
      ></DeactivateModal>

      <ActivateModal
        onActivate={activateOpen}
        closeActivate={() => setActivateOpen(false)}
      ></ActivateModal>
    </>
  );
}

export default Table;