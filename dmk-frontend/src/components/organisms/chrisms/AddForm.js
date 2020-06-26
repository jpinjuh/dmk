// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Model
import { ChrismForm } from 'Pages/chrisms/model/chrisms'

// Organisms
import AddModal from 'Components/organisms/persons/AddModal'

// Action
import { postData } from "Modules/units/Baptized";
import { clearValidation } from "Modules/units/Validation";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const AddForm = () => {
  const [personOpen, setPersonOpen] = useState(false)
  const [inputs, setInputs] = useState(ChrismForm);
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

    dispatch(postData(`chrism_note`, body, clearInputs));
  };

  return (
    <>
      <Box>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Krizmena cedulja'}
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
                    title={'Podaci o krizmi'}
                    bgColor={'#8e93b9'}
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
            <Box mt={4}>
              <Button
                label="+ Dodaj"
                onClick={addItem}
              />
            </Box>
          </form>
        </Box>
      </Box>
      <AddModal
        onOpen={personOpen}
        closeModal={() => setPersonOpen(false)}
      ></AddModal>
    </>
  );
};

export default AddForm;
