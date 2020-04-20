// React
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData as getUsers} from "Modules/units/Users";

// MUI
import Box from "@material-ui/core/Box";

// Atoms
import Title from 'Components/atoms/UI/Title'
import Button from 'Components/atoms/buttons/Button'

// Molecules
import Table from "Components/molecules/Table"

// Organisms 
import AddUserModal from 'Components/organisms/AddUserModal'

const ModeratorDataTable = ({title, label, model}) => {
  const dispatch = useDispatch();

  const [ open, setOpen] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
  };

  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [])

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
          onClick={() => setOpen(true)}
        />
      </Box>
      <Table data={users} model={model}></Table>
      <AddUserModal
        onOpen={open} 
        closeModal={() => setOpen(false)} 
      ></AddUserModal>
    </>
  );
};

export default ModeratorDataTable;
