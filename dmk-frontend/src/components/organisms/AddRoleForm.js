// React
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

// MUI
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Actions
import { postData, getData } from "Modules/units/Roles";

const requiredInputs = [
  {
    label: 'Naziv role',
    type: 'text',
    disabled: false,
    name_in_db: 'role_name',
  },
]

const AddRoleForm = () => {
  const [inputs, setInputs] = useState(requiredInputs);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

   

    const name = inputs[0].value
    const body = {
      name
    }

    dispatch(postData("role", body))
    //setInputs([0].value = '')
    //dispatch(getData());
    console.log(inputs)
    //inputs[0].value=''
    //console.log(inputs)
    setInputs([
      {
        label: 'Naziv role',
        type: 'text',
        disabled: false,
        name_in_db: 'role_name',
      },
    ]);
    //setInputs([...requiredInputs]);
    console.log(inputs)
   
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
        <InputForm 
          inputs={inputs} 
          setInputs={setInputs}
        />
        <Box mt={2}>
          <Button 
            label="+ Dodaj rolu" 
            type={"submit"}
            onClick={handleSubmit} />
        </Box>
      </form>
    </>
  );
};

export default AddRoleForm;
