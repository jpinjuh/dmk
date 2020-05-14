import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";

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
import { putFunc } from "Services/mainApiServices"

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
    height: '56px',
    fontSize: '18px',
    borderRadius: '7px',
    textTransform: 'none'
  },
}));

const requiredInputs = [
  {
    label: 'Trenutna lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password',
  },
  {
    label: 'Nova lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password_change',
  },
  {
    label: 'Potvrdi lozinku',
    type: 'text',
    disabled: false,
    name_in_db: 'password_confirm',
  }
]

const ChangePasswordModal = ({ onOpen, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(requiredInputs);

  useEffect(() => {
    return () => {
      let clearVal = inputs.filter(input => {
        input.value = '';
        return input;
      })
      setInputs(clearVal)
    }
  }, [onOpen])

  const changePassword = e => {
    e.preventDefault();
    const body = {};
    
    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })

    console.log(body)
   
    putFunc('user/change_pass', body).then(
      response => 
      {
        if(response.status.errorCode === 200)
        {
          NotificationManager.success(response.status.description)
          let clearVal = inputs.filter(input => {
            input.value = '';
            return input;
          }) 
          setInputs(clearVal)
          closeModal();
        }
        else
        {
          NotificationManager.error(response.status.description)
        }
        
      },
    )
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
                <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
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