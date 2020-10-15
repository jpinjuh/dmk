// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box, Grid } from "@material-ui/core";
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
import AddModal from 'Components/organisms/persons/AddModal'

// Action
import { postData } from "Modules/units/Marriages";
import { clearValidation } from "Modules/units/Validation";

import moment from "moment";


const useStyles = makeStyles((theme) => ({
  title: {
    borderBottom: '1px solid #e0e0e0',
    padding: '8px 8px 8px 24px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const AddForm = ({open, setOpen}) => {
  const [personOpen, setPersonOpen] = useState(false)
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
      value: input.type === "date" ? moment() : ""
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
      if (input.type === "date") {
        body[input.name_in_db] = moment(input.value).format("YYYY-MM-DD")
      } else {
        body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
      }
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
            title={'Dodavanje vjenčanog lista'}
            bgColor={'#8e93b9'}
          />
         
        </Box>
        <Box mx={3} mt={1} >
        <form>
            <Box mt={4} mb={6}>
              <Box mb={2} display="flex">
                <Box flexGrow={1} className={classes.center}>
                  <Title
                    align={'left'}
                    title={'PODACI O VJENČANJU'}
                  />
                </Box>
                <Box>
                  <Button
                    size={'large'}
                    variant={'text'}
                    label="+ Brzo dodavanje"
                    onClick={()=>setPersonOpen(true)}
                  />
                </Box>
              </Box>
              <InputForm inputs={inputs} setInputs={setInputs} spacing={2} validation={validation}></InputForm>
            </Box>
            <Divider />
            <Box mt={4}>
              <Box mb={2}>
                <Title
                  align={'left'}
                  title={'DODATNI PODACI'}
                />
              </Box>
              <InputForm inputs={otherInputs} setInputs={setOtherInputs} spacing={2} validation={validation}></InputForm>
            </Box>
            <Grid item xs={12} md={6} lg={4}>
              <Box mt={3} mb={2} pr={1}>
                <Button
                  label="DODAJ VJENČANI LIST"
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
      <AddModal
        onOpen={personOpen}
        closeModal={() => setPersonOpen(false)}
      ></AddModal>
    </>
  );
};

export default AddForm;
