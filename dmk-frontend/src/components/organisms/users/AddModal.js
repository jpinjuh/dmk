import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
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

// Models
import { UserForm } from 'Pages/users/model/user'

// Organisms
import EditModal from 'Components/organisms/users/EditModal'

// Actions
import { postData } from "Modules/units/Users";

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

const AddModal = ({ onOpen, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(UserForm);
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState('');
  const [open, setOpen] = useState(false);

  const newItem = useSelector(state => state.users.oneItem);

  useEffect(() => {
    if (newItem)
      setItemId(newItem.id)
  }, [newItem])

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []

    inputs.forEach(input => {
      body[input.name_in_db] = input.value.hasOwnProperty('id') ? { id: input.value['id'] } : input.value;;
      arr.push(body[input.name_in_db])
    })
    setItem(arr)
    dispatch(postData(`user`, body));

    let clearVal = inputs.filter(input => {
      input.value = '';
      return input;
    });
    closeModal();
    setTimeout(() => {
      setOpen(true)
    }, 500);
    setInputs(clearVal)
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
                      onClick={addItem}
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