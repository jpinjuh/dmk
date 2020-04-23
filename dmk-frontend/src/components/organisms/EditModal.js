import React, { useState, useEffect } from 'react';
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
import Title from "Components/atoms/UI/Title";

// Actions
import { putData as putRoles } from "Modules/units/Roles";
import { putData as putPermissions } from "Modules/units/Permissions";
import { putData as putPrivileges } from "Modules/units/Privileges";
import { putData as putDistricts } from "Modules/units/Districts";
import { putData as putCities } from "Modules/units/Cities";
import { putData as putStates } from "Modules/units/States";
import { putData as putUsers } from "Modules/units/Users";

// Models
import { RoleForm } from 'Pages/roles/model/role'
import { PrivilegeForm } from 'Pages/privileges/model/privilege'
import { CitiesForm } from 'Pages/cities/model/city'
import { PermissionForm } from '../../pages/permissions/model/permission';
import { StateForm } from '../../pages/states/model/state';
import { DistrictForm } from '../../pages/districts/model/district';
import { UserForm } from 'Pages/users/model/user'

// Services
import { getFunc } from "Services/mainApiServices";

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

let requiredInputs = [], putAction, path, title;

const EditModal = ({ onOpen, closeModal, item, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  switch (location.pathname) {
    case '/role':
      requiredInputs = RoleForm;
      putAction = putRoles;
      path = 'role';
      title = 'Uredi rolu';
      break;
    case '/prava':
      requiredInputs = PermissionForm;
      putAction = putPermissions;
      path = '/permission';
      title = 'Uredi pravo';
      break;
    case '/privilegije':
      requiredInputs = PrivilegeForm;
      putAction = putPrivileges;
      path = 'privilege';
      title = 'Uredi privilegije';
      break;
    case '/župe':
      requiredInputs = DistrictForm;
      putAction = putDistricts;
      path = 'district';
      title = 'Uredi župu';
      break;
    case '/gradovi':
      requiredInputs = CitiesForm;
      putAction = putCities;
      path = 'city';
      title = 'Uredi gradove';
      break;
    case '/države':
      requiredInputs = StateForm;
      putAction = putStates;
      path = 'state';
      title = 'Uredi države';
      break;
    case '/korisnici':
      requiredInputs = UserForm;
      putAction = putUsers;
      path = 'user';
      title = 'Uredi korisnika';
      break;
    default:
      console.log('Not working!!!');
  }

  const [inputs, setInputs] = useState(requiredInputs);

  const editItem = (e) => {
    e.preventDefault();

    const body = {};
    inputs.forEach(input => {
      body[input.name_in_db] = input.value.hasOwnProperty('id') ? { id: input.value['id'] } : input.value;
    })

    dispatch(putAction(`${path}/${itemId}`, body));

    closeModal();
  }

  useEffect(() => {
    inputs.forEach((input, index) => {
      input.name_in_db === 'password_hash' ?
      (input.value = '')
      : (input.value = item[index])
    })
  }, [item]);

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
                  title={title}
                />
              </Box>
              <form>
                <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
                <Box pt={3} display="flex" justifyContent="flex-start">
                  <Box pr={1}>
                    <Button
                      label="Potvrdi"
                      onClick={editItem}
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

export default EditModal;