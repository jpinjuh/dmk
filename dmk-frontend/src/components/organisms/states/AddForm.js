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
import { StateForm } from 'Pages/states/model/state'

// Organisms
import EditModal from 'Components/organisms/states/EditModal'

// Action
import { postData } from "Modules/units/States";
import { clearValidation } from "Modules/units/Validation";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const AddForm = ({open, setOpen}) => {
  const [inputs, setInputs] = useState(StateForm);
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
      name_in_db: input.name_in_db,
      validation: null,
      error: false,
      value: ""
    })));
  }

  const addItem = e => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })
    dispatch(postData(`state`, body, clearInputs, setOpen));
  };

  const closeModal = () => {
    setOpen(false);
  }


  return (
    <>
      <Box>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Dodavanje države'}
          />
        </Box>
        <Box mx={3} mt={2}>
          <form>
            <InputForm inputs={inputs} setInputs={setInputs} cols={4} validation={open ? null : validation}></InputForm>
            <Box mt={2} xs={4}>
              <Button
                label="+ Dodaj državu"
                onClick={addItem}
              />
            </Box>
          </form>
        </Box>
      </Box>

      <EditModal
        onOpen={open}
        closeModal={() => setOpen(false)}
      ></EditModal>
    </>
  );
};

export default AddForm;
