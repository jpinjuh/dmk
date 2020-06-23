import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MUIButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// Molecules
import InputForm from "Components/molecules/InputForm"

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Models
import { PersonForm } from 'Pages/persons/model/person'
import { ExtraForm } from 'Pages/persons/model/person'

// Actions
import { postData } from "Modules/units/Persons";

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 5, 4),
    width: '85%'
  },
  button: {
    fontSize: '14px',
    borderRadius: '5',
    textTransform: 'none'
  },
}));

const AddModal = ({ onOpen, closeModal }) => {
  const [inputs, setInputs] = useState(PersonForm);
  const [extraInputs, setExtraInputs] = useState(ExtraForm);

  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const validation = useSelector(state => state.validation);


  const clearInputs = () => {
    setInputs(inputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      name_in_db: input.name_in_db,
      service: input.service,
      validation: null,
      error: false,
      value: ""
    })));
    setExtraInputs(extraInputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      name_in_db: input.name_in_db,
      service: input.service,
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
    extraInputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
    })
    dispatch(postData(`person`, body, clearInputs, closeModal));
  };

  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={onOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={onOpen}>
          <Container className={classes.paper} maxWidth={useMediaQuery(theme.breakpoints.up('sm')) ? 'md' : 'xs'}>
            <Box display="flex" flexDirection="column" p={2}>
              <Box mb={3}>
                <Title
                  variant="h5"
                  align={'left'}
                  title={'Dodaj osobu'}
                />
              </Box>
              <form>
              <Box mt={4} mb={6}>
              <Box mb={2}>
                  <Title
                    align={'left'}
                    title={'Podaci o osobi'}
                    bgColor={'#8e93b9'}
                  />
              </Box>
              <InputForm inputs={inputs} setInputs={setInputs} xs={12} md={6} lg={6} spacing={2} validation={validation}></InputForm>
            </Box>
            <Divider />
            <Box mt={4} mb={6}>
              <Box mb={2}>
                <Title
                  align={'left'}
                  title={'Dodatni podaci'}
                  bgColor={'#8e93b9'}
                />
              </Box>
              <InputForm inputs={extraInputs} setInputs={setExtraInputs} xs={12} md={6} lg={6} spacing={2} validation={validation}></InputForm>
            </Box>
                <Box pt={3} display="flex" justifyContent="flex-start">
                  <Box pr={1}>
                    <Button
                      label="Potvrdi"
                      onClick={addItem}
                    />
                  </Box>
                  <Box>
                    <MUIButton
                      variant="contained"
                      disableElevation
                      onClick={closeModal}
                      className={classes.button}
                    >Otkaži</MUIButton>
                  </Box>
                </Box>
              </form>
            </Box>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddModal;