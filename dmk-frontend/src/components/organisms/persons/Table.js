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
import { formatLocalDate } from 'Components/atoms/inputs/Timepicker'

// Organisms
import EditModal from 'Components/organisms/persons/EditModal'
import AddModal from 'Components/organisms/persons/AddModal'
import DeactivateModal from 'Components/organisms/persons/DeactivateModal'
import ActivateModal from 'Components/organisms/persons/ActivateModal'

// Actions
import { getData, getOneItem, searchData } from "Modules/units/Persons";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false)
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [itemId, setItemId] = useState('');
  const [item, setItem] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0)
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.persons);

  const getItem = async id => {
    dispatch(getOneItem(`person/${id}`))
    setTimeout(() => setOpen(true), 500)
  };

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
    /*{
      label: 'Djevojačko prezime',
      name: 'maiden_name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Rođen/a',
      name: 'birth_date',
      options: {
        filter: false,
        sort: false,
      }
    },*/
    {
      label: 'JMBG',
      name: 'identity_number',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Datum rođenja',
      name: 'birth_date',
      options: {
        customBodyRender: value => <span>{formatLocalDate(value)}</span>
      }
    },
    {
      label: 'Mjesto rođenja',
      name: 'city.name',
      options: {
      customBodyRender: value => value ? <span>{value}</span> : <span>{'-'}</span>
      }
    },
    /*{
      label: 'Otac',
      name: 'father.first_name',
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      label: 'Majka',
      name: 'mother.first_name',
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
      label: 'Religija',
      name: 'religion.value',
      options: {
        filter: false,
        sort: false,
      }
    }*/
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
                    label={'Detalji'}
                    icon={"list"}
                  />
                </Box>
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
    dispatch(getData(`person?start=${page + 1}&limit=${rows}`))
  };

  const getSearchData = async value => {
    const body = {
      search: value
    };

    dispatch(searchData('person/search', body))
  };

  const options = {
    elevation: 0,
    print: false,
    download: false,
    filter: false,
    search:false,
    viewColumns: false,
    customToolbar: null,
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
          label="+ Dodaj osobu"
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
          title={'Popis osoba'}
          data={tableData.data}
          columns={columns}
          options={options}
        />}

      <AddModal
        onOpen={openAdd} 
        closeModal={() => setOpenAdd(false)} 
      ></AddModal>
    </>
  );
}

export default Table;