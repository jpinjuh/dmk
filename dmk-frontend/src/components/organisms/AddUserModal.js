import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MUIButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Molecules
import InputForm from "Components/molecules/InputForm"

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

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
    padding: theme.spacing(2, 5, 3),
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
    label: 'Ime',
    type: 'text',
    disabled: false,
    name_in_db: 'first_name',
  },
  {
    label: 'Prezime',
    type: 'text',
    disabled: false,
    name_in_db: 'last_name',
  },
  {
    label: 'Korisničko ime',
    type: 'text',
    disabled: false,
    name_in_db: 'username',
  },
  {
    label: 'Lozinka',
    type: 'text',
    disabled: false,
    name_in_db: 'password',
  },
  {
    label: 'Uloga',
    type: 'autocomplete',
    disabled: false,
    name_in_db: 'role',
  },
]

const AddUserModal = ({ onOpen, closeModal }) => {
  const classes = useStyles();
  const [text, setText] = React.useState('');
  const [inputs, setInputs] = useState(requiredInputs);

  const handleChange = event => {
    setText(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
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
          <div className={classes.paper}>
            <Box display="flex" flexDirection="column" p={2}>
              <Box mb={3}>
                <Title 
                  variant="h5" 
                  align={'left'} 
                  title={'Dodaj korisnika'}
                />
              </Box>
              <form>
                <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
                <Box pt={3} display="flex" justifyContent="flex-start">
                  <Box pr={1}>
                    <Button 
                      label="Potvrdi"
                    />
                  </Box>
                  <Box>
                    <MUIButton
                      variant="contained"
                      disableElevation
                      onClick={closeModal}
                      className={classes.button}
                    >Cancel</MUIButton>
                  </Box>
                </Box>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddUserModal;