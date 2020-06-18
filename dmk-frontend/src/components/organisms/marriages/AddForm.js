// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Model
import { MarriageForm } from 'Pages/marriages/model/marriages'
import { NoteForm } from 'Pages/marriages/model/marriages'

// Organisms
import EditModal from 'Components/organisms/marriages/EditModal'

// Action
import { postData } from "Modules/units/Marriages";
import { clearValidation } from "Modules/units/Validation";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const AddForm = ({open, setOpen}) => {
  const [inputs, setInputs] = useState(MarriageForm);
  const [otherInputs, setOtherInputs] = useState(NoteForm);
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
    setOtherInputs(otherInputs.map(input => ({
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

    inputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
    })
    otherInputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
    })

    dispatch(postData(`registry_of_marriage`, body, clearInputs, setOpen));
  };

  return (
    <>
      <Box>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Dodavanje vjenčanih'}
            bgColor={'#8e93b9'}
          />
        </Box>
        <Box mx={3} mt={1} >
        <form>
            <Box mt={4} mb={6}>
              <Box mb={2}>
                <Title
                  align={'left'}
                  title={'Podaci o vjenčanju'}
                  bgColor={'#8e93b9'}
                />
              </Box>
              <InputForm inputs={inputs} setInputs={setInputs} spacing={2} validation={validation}></InputForm>
            </Box>
            <Divider />
            <Box mt={4}>
              <Box mb={2}>
                <Title
                  align={'left'}
                  title={'Dodatni podaci'}
                  bgColor={'#8e93b9'}
                />
              </Box>
              <InputForm inputs={otherInputs} setInputs={setOtherInputs} spacing={2} validation={validation}></InputForm>
            </Box>
            <Box mt={4}>
              <Button
                label="+ Dodaj vjenčani"
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
