// React
import React, { useState } from 'react';

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'
import Button from 'Components/atoms/buttons/Button'

// Molecules
import Table from "Components/organisms/users/Table"

// Organisms 
import AddModal from 'Components/organisms/users/AddModal'

const ModeratorDataTable = () => {

  const [ open, setOpen] = useState(false);

  return (
    <>
      <Box mb={7} display="flex" justifyContent="space-between">
        <Title 
          variant="h4" 
          align={'left'} 
          title={'Popis korisnika'}
        />
        <Button
          label="+ Dodaj korisnika"
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
