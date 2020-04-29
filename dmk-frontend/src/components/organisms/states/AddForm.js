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
import { StateForm } from 'Pages/states/model/state'

// Action
import { postData } from "Modules/units/States";

const AddForm = () => {
  const [inputs, setInputs] = useState(StateForm);
  const dispatch = useDispatch();

  const addItem = e => {
    e.preventDefault();

    const body = {};
    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })

    dispatch(postData('state', body))
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
          title={'Dodaj državu'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button
            label="+ Dodaj državu"
            onClick={addItem}
          />
        </Box>
      </form>
    </>
  );
};

export default AddForm;
