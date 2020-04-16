// React
import React, { useState } from 'react';

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'
import Button from 'Components/atoms/buttons/Button'

// Molecules
import Table from "Components/molecules/Table"

// Organisms 
import AddUserModal from 'Components/organisms/AddUserModal'

const ModeratorDataTable = ({title, label}) => {
  const [ open, setOpen] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box mb={7} display="flex" justifyContent="space-between">
        <Title 
          variant="h4" 
          align={'left'} 
          title={title}
        />
        <Button
          label="+ Dodaj korisnika"
          type="submit"
          onClick={() => setOpen(true)}
        />
      </Box>
      <Table></Table>
      <AddUserModal
        onOpen={open} 
        closeModal={() => setOpen(false)} 
      ></AddUserModal>
    </>
  );
};

export default ModeratorDataTable;
