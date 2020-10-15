// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

// MUI
import { Box, Grid } from "@material-ui/core";
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
    borderBottom: '1px solid #e0e0e0',
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
            <InputForm inputs={inputs} setInputs={setInputs} validation={open ? null : validation}></InputForm>
            <Grid item xs={12} md={6} lg={4}>
              <Box mt={3} mb={2} pr={1}>
                <Button
                  label="DODAJ DRŽAVU"
                  onClick={addItem}
                  fullWidth={true}
                />
              </Box>
            </Grid>
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
