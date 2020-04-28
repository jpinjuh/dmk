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
import { activateData as activateRole } from "Modules/units/Roles";
import { activateData as activatePermisson } from "Modules/units/Permissions";
import { activateData as activatePrivilege } from "Modules/units/Privileges";
import { activateData as activateDistrict } from "Modules/units/Districts";
import { activateData as activateCity } from "Modules/units/Cities";
import { activateData as activateState } from "Modules/units/States";
import { activateData as activateUser } from "Modules/units/Users";

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

let activateAction, path, title;

const ActivateModal = ({ onActivate, closeActivate, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  
  switch(location.pathname){
    case '/role':
      activateAction = activateRole;
      path = 'role';
      title= 'Jeste li sigurni da želite aktivirati odabranu rolu?';
      break;
    case '/prava':
      activateAction = activatePermisson;
      path = '/permission';
      title= 'Jeste li sigurni da želite aktivirati odabrano pravo?';
      break;
    case '/privilegije':
      activateAction = activatePrivilege;
      path = 'privilege';
      title= 'Jeste li sigurni da želite aktivirati odabranu privilegiju?';
      break;
    case '/župe':
      activateAction = activateDistrict;
      path = 'district';
      title= 'Jeste li sigurni da želite aktivirati odabranu župu?';
      break;
    case '/gradovi':
      activateAction = activateCity;
      path = 'city';
      title= 'Jeste li sigurni da želite aktivirati odabrani grad?';
      break;
    case '/države':
      activateAction = activateState;
      path = 'state';
      title= 'Jeste li sigurni da želite aktivirati odabranu državu?';
      break;
    case '/korisnici':
        activateAction = activateUser;
        path = 'user';
        title= 'Jeste li sigurni da želite aktivirati odabranog korisnika?';
        break;
    default:
      console.log('Not working!!!');
  }

  const activateItem = (e) => {
    e.preventDefault();
    
    dispatch(activateAction(`${path}/activate`, {id: itemId}))
    closeActivate();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={onActivate}
        onClose={closeActivate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={onActivate}>
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
                    onClick={activateItem}
                  />
                </Box>
                <Box>
                  <MUIButton
                    variant="contained"
                    disableElevation
                    onClick={closeActivate}
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

export default ActivateModal;