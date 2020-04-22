import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

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
import Title from "Components/atoms/UI/Title"

// Actions
import { deleteData as deleteRole } from "Modules/units/Roles";
import { deleteData as deletePermisson } from "Modules/units/Permissions";
import { deleteData as deletePrivilege } from "Modules/units/Privileges";
import { deleteData as deleteDistrict } from "Modules/units/Districts";
import { deleteData as deleteCity } from "Modules/units/Cities";
import { deleteData as deleteState } from "Modules/units/States";

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

let deleteAction, path, title;

const DeleteModal = ({ onDelete, closeDelete, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  
  switch(location.pathname){
    case '/role':
      deleteAction = deleteRole;
      path = 'role';
      title= 'Jeste li sigurni da želite obrisati odabranu rolu?';
      break;
    case '/prava':
      deleteAction = deletePermisson;
      path = '/permission';
      title= 'Jeste li sigurni da želite obrisati odabrano pravo?';
      break;
    case '/privilegije':
      deleteAction = deletePrivilege;
      path = 'privilege';
      title= 'Jeste li sigurni da želite obrisati odabranu privilegiju?';
      break;
    case '/župe':
      deleteAction = deleteDistrict;
      path = 'district';
      title= 'Jeste li sigurni da želite obrisati odabranu župu?';
      break;
    case '/gradovi':
      deleteAction = deleteCity;
      path = 'city';
      title= 'Jeste li sigurni da želite obrisati odabrani grad?';
      break;
    case '/države':
      deleteAction = deleteState;
      path = 'state';
      title= 'Jeste li sigurni da želite obrisati odabranu državu?';
      break;
    default:
      console.log('Not working!!!');
  }

  const deleteItem = (e) => {
    e.preventDefault();
    
    dispatch(deleteAction(`${path}/${itemId}`))
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
                <Title 
                  variant="h6" 
                  align={'left'} 
                  title={title}
                />
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