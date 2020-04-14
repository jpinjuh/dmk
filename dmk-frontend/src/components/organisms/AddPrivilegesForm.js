// React
import React, { useState } from 'react';

// MUI
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

const requiredInputs = [
  {
    label: 'Naziv role',
    type: 'text',
    disabled: false,
    name_in_db: 'role_name',
  },
  {
    label: 'Pravo',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'permission_name',
  },
]

const AddPrivilegesForm = () => {
  const [inputs, setInputs] = useState(requiredInputs);

  return (
    <>
      <Box mb={3}>
        <Title 
          variant="h5" 
          align={'left'} 
          title={'Dodaj privilegiju'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button label="+ Dodaj privilegiju"/>
        </Box>
      </form>
    </>
  );
};

export default AddPrivilegesForm;
