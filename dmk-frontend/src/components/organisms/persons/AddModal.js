import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
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

// Models
import { PersonForm } from 'Pages/persons/model/person'

// Organisms
import EditModal from 'Components/organisms/persons/EditModal'

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
  },
  button: {
    fontSize: '14px',
    borderRadius: '5',
    textTransform: 'none'
  },
}));

const AddModal = ({ onOpen, closeModal }) => {
  const [inputs, setInputs] = useState(PersonForm);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState('');
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const newItem = useSelector(state => state.users.oneItem);
  const errorMsg = useSelector(state => state.users.postErrorMsg);

  useEffect(() => {
    if (newItem)
      setItemId(newItem.id)
  }, [newItem])

  useEffect(() => {
    return () => {
      let clearVal = inputs.filter(input => {
        input.value = '';
        input.validation = '';
        input.error = false;
        return input;
      })
      setInputs(clearVal)
    }
  }, [])

  useEffect(() => {
    if (submitted) {
      if (errorMsg.errorCode === 200) {
        setOpen(true)
        let clearVal = inputs.filter(input => {
          input.value = '';
          input.validation = '';
          input.error = false;
          return input;
        })

        closeModal();
        setInputs(clearVal)
        setSubmitted(false)
      } else if(errorMsg.errorCode === 400){
        if(typeof errorMsg.description === 'object'){
          inputs.forEach(input => {
            Object.keys(errorMsg.description).forEach(desc => {
              if(input.name_in_db === desc){
                if(Array.isArray(errorMsg.description[desc]))
                {
                  input.validation = errorMsg.description[desc][0];
                  input.error = true;
                }
                else
                {
                  input.validation = errorMsg.description[desc].id[0];
                  input.error = true;
                }            
              }
            })
          })
        }
        setSubmitted(false)
      }
      else {
        NotificationManager.error(errorMsg.description);
        setSubmitted(false)
      }
    }
  }, [errorMsg])

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []

    inputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
      arr.push(input.value)
    })
    setItem(arr)
    setSubmitted(true)
    dispatch(postData(`person`, body));
  };

  const closeEditModal = () => {
    setOpen(false);
    setItem([]);
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
                  align={'left'}
                  title={'Dodaj osobu'}
                />
              </Box>
              <form>
                <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
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
      <EditModal
        onOpen={open}
        closeModal={closeEditModal}
        item={item}
        itemId={itemId}
      ></EditModal>
    </div>
  );
}

export default AddModal;