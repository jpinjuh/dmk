// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

// MUI
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Model
import { BaptizedForm } from 'Pages/baptized/model/baptized'

// Organisms
import EditModal from 'Components/organisms/baptized/EditModal'

// Action
import { postData } from "Modules/units/Baptized";
import { clearValidation } from "Modules/units/Validation";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const AddForm = () => {
  const [inputs, setInputs] = useState(BaptizedForm);
  const dispatch = useDispatch();
  const classes = useStyles();

  const validation = useSelector(state => state.validation);

  useEffect(() => {
    clearInputs()
    dispatch(clearValidation())
  }, [])

  const clearInputs = () => {
    setInputs(inputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      service: input.service,
      name_in_db: input.name_in_db,
      validation: null,
      error: false,
      value: ""
    })));
  }

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []

    inputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
      arr.push(input.value)
    })

    dispatch(postData(`registry_of_baptism`, body, clearInputs));
  };

  return (
    <>
      <Box>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Dodavanje krštenika'}
            bgColor={'#8e93b9'}
          />
        </Box>
        <Box mx={3} mt={1} >
          <form>
            <InputForm inputs={inputs} setInputs={setInputs} cols={4} spacing={2} validation={validation}></InputForm>
            <Box mt={4}>
              <Button
                label="+ Dodaj krštenika"
                onClick={addItem}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddForm;
