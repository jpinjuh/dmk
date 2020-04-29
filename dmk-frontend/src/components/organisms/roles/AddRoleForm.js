// React
import React, { useState } from 'react';
import { useDispatch } from "react-redux";

// MUI
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Model
import { RoleForm } from 'Pages/roles/model/role'

// Action
import { postData } from "Modules/units/Roles";

const AddRoleForm = () => {
  const [inputs, setInputs] = useState(RoleForm);
  const dispatch = useDispatch();

  const addItem = e => {
    e.preventDefault();

    const body = {};
    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })

    dispatch(postData('role', body))
    let clearVal = inputs.filter(input => {
      input.value = '';
      return input;
    })

    setInputs(clearVal)
  };

  return (
    <>
      <Box mb={3}>
        <Title
          variant="h5"
          align={'left'}
          title={'Dodaj rolu'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button
            label="+ Dodaj rolu"
            onClick={addItem}
          />
        </Box>
      </form>
    </>
  );
};

export default AddRoleForm;
