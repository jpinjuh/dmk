// React
import React, { useState } from 'react';

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'
import Button from 'Components/atoms/buttons/Button'

// Molecules
import Table from "Components/organisms/persons/Table"

// Organisms 
import AddModal from 'Components/organisms/persons/AddModal'

const ModeratorDataTable = () => {

  const [ open, setOpen] = useState(false);

  return (
    <>
      <Box mb={3} display="flex" justifyContent="space-between">
        <Button
          label="+ Dodaj osobu"
          onClick={() => setOpen(true)}
        />
      </Box>
      <Table></Table>
      <AddModal
        onOpen={open} 
        closeModal={() => setOpen(false)} 
      ></AddModal>
    </>
  );
};

export default ModeratorDataTable;
