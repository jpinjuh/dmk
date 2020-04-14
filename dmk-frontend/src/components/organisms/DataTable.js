// React
import React, { useState } from 'react';

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'

// Molecules
import Table from "Components/molecules/Table"

const DataTable = ({title}) => {
  return (
    <>
      <Box mb={7}>
        <Title 
          variant="h4" 
          align={'left'} 
          title={title}
        />
      </Box>
      <Table></Table>
    </>
  );
};

export default DataTable;
