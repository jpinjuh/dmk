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
import { makeStyles } from '@material-ui/core/styles';

// Organisms
import EditModal from 'Components/organisms/roles/EditModal'
import DeactivateModal from 'Components/organisms/roles/DeactivateModal'
import ActivateModal from 'Components/organisms/roles/ActivateModal'

// Actions
import { getData, searchData, getOneItem } from "Modules/units/Roles";

const useStyles = makeStyles((theme) => ({
  chip: {
    '& .MuiChip-label': {
      color: 'green'
    }
  },
}));

const Table = ({open, setOpen}) => {
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0)
  const isInitialMount = useRef(true);
  const classes = useStyles();

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.roles);

  const columns = [
    {
      label: 'Naziv role',
      name: 'name',
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
                ? <Chip label="AKTIVAN" color="info" className={classes.chip} />
                : <Chip label="NEAKTIVAN" disabled />
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
                    onClick={() => dispatch(getOneItem(`role/${value}`, setOpen))}
                  />
                </Box>
                <div>
                  {(tableMeta.rowData[tableMeta.rowData.length - 2] === 0)
                    ? <Box mr={3}>
                      <ButtonWithIcon
                        label={'Aktiviraj'}
                        icon={"visibility"}
                        onClick={() => dispatch(getOneItem(`role/${value}`, setActivateOpen))}
                      />
                    </Box>
                    : <Box>
                      <ButtonWithIcon
                        label={'Deaktiviraj'}
                        icon={"visibility_off"}
                        onClick={() => dispatch(getOneItem(`role/${value}`, setDeactivateOpen))}
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
    dispatch(getData(`role?start=${page + 1}&limit=${rows}`))
  };

  const getSearchData = async value => {
    const body = {
      search: value
    };

    dispatch(searchData('role/search', body))
  };

  const options = {
    elevation: 0,
    print: false,
    download: false,
    search:true,
    filter: false,
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
        <>
          <MUIDataTable
            title={'Popis rola'}
            data={tableData.data}
            columns={columns}
            options={options}
          />
        </>
        }
      <EditModal
        onOpen={open}
        closeModal={() => setOpen(false)}
      ></EditModal>

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