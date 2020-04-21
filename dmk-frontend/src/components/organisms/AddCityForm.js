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
    label: 'Naziv grada',
    type: 'text',
    disabled: false,
    name_in_db: 'city_name',
  },
  {
    label: 'Država',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'state_name',
    service: 'state/autocomplete'
  },
]

const AddPermissionsForm = () => {
  const [inputs, setInputs] = useState(requiredInputs);

  return (
    <>
      <Box mb={3}>
        <Title 
          variant="h5" 
          align={'left'} 
          title={'Dodaj grad'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button label="+ Dodaj grad"/>
        </Box>
      </form>
    </>
  );
};

export default AddPermissionsForm;
