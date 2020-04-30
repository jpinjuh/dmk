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
import { PrivilegeForm } from 'Pages/privileges/model/privilege'

// Action
import { postData } from "Modules/units/Privileges";

const AddForm = () => {
  const [inputs, setInputs] = useState(PrivilegeForm);
  const dispatch = useDispatch();

  const addItem = e => {
    e.preventDefault();

    const body = {};
    inputs.forEach(input => {
      body[input.name_in_db] = input.value.hasOwnProperty('id') ? { id: input.value['id'] } : input.value;
    })

    dispatch(postData('privilege', body))
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
          title={'Dodaj privilegiju'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button
            label="+ Dodaj privilegiju"
            onClick={addItem}
          />
        </Box>
      </form>
    </>
  );
};

export default AddForm;
