import React, { useState } from 'react';
import { useDispatch } from "react-redux";

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

// Actions
import { deleteData } from "Modules/units/Roles";

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

const DeleteModal = ({ onDelete, closeDelete, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteData(`role/${itemId}`))
    closeDelete();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={onDelete}
        onClose={closeDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={onDelete}>
          <div className={classes.paper}>
            <Box display="flex" flexDirection="column" p={2}>
              <Box mb={3}>
                <p>Jeste li sigurni da želite obrisati odabranu rolu?</p>
              </Box>
              
              <Box pt={3} display="flex" justifyContent="flex-start">
                <Box pr={1}>
                  <Button 
                    label="Potvrdi"
                    onClick={deleteItem}
                  />
                </Box>
                <Box>
                  <MUIButton
                    variant="contained"
                    disableElevation
                    onClick={closeDelete}
                    className={classes.button}
                  >Cancel</MUIButton>
                </Box>
              </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DeleteModal;