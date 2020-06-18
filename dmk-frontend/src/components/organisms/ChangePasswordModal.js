import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MUIButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// Molecules
import InputForm from "Components/molecules/InputForm"

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Services
import { editPassword } from "Modules/units/Auth"
import { clearValidation } from "Modules/units/Validation"

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
  },
  button: {
    fontSize: '14px',
    borderRadius: '5',
    textTransform: 'none'
  },
}));

const requiredInputs = [
  {
    label: 'Trenutna lozinka',
    type: 'password',
    disabled: false,
    name_in_db: 'old_password',
    validation: null,
    error: false
  },
  {
    label: 'Nova lozinka',
    type: 'password',
    disabled: false,
    name_in_db: 'new_password',
    validation: null,
    error: false
  },
  {
    label: 'Potvrdi lozinku',
    type: 'password',
    disabled: false,
    name_in_db: 'password_confirm',
    validation: null,
    error: false
  }
]

const ChangePasswordModal = ({ onOpen, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(requiredInputs);

  const validation = useSelector(state => state.validation);

  useEffect(() => {
    clearInputs()
    dispatch(clearValidation())
  }, [onOpen])

  
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

  const changePassword = e => {
    e.preventDefault();
    const body = {};
    
    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })
    dispatch(editPassword(`alter_your_password`, body, closeModal));
  
  }

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
        <Container className={classes.paper} maxWidth="xs">
            <Box display="flex" flexDirection="column" p={2}>
              <Box mb={3}>
                <Title
                  variant="h5"
                  align={'center'}
                  title={'Promjeni lozinku'}
                />
              </Box>
              <form>
                <InputForm inputs={inputs} setInputs={setInputs} xs={12} md={12} lg={12} validation={validation}></InputForm>
                <Box pt={3} display="flex" justifyContent="flex-start">
                  <Box pr={1}>
                    <Button
                      label="Potvrdi"
                      onClick={changePassword}
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

export default ChangePasswordModal;