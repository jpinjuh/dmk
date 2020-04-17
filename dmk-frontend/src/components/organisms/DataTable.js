// React
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "Modules/units/Roles";

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'

// Molecules
import Table from "Components/molecules/Table"

const DataTable = ({title, selector, model}) => {
  const dispatch = useDispatch();
  
  const roles = useSelector(state => state.roles);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Box mb={7}>
        <Title 
          variant="h4" 
          align={'left'} 
          title={title}
        />
      </Box>
      <Table data={roles} model={model}></Table>
    </>
  );
};

export default DataTable;
