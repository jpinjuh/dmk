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
    label: 'Naziv župe',
    type: 'text',
    disabled: false,
    name_in_db: 'district_name',
  },
  {
    label: 'Grad',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'grad_name',
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
          title={'Dodaj župu'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button label="+ Dodaj župu"/>
        </Box>
      </form>
    </>
  );
};

export default AddPermissionsForm;
