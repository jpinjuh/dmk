import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
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

// Actions
import { putData } from "Modules/units/Permissions";

// Models
import { EditForm } from 'Pages/permissions/model/permission'
import { clearValidation } from "Modules/units/Validation";

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

const EditModal = ({ onOpen, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(EditForm);
  const isInitialMount = useRef(true);

  const oneItem = useSelector(state => state.permissions.oneItem);
  const validation = useSelector(state => state.validation);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(clearValidation())
    }
  }, [onOpen])

  const editItem = (e) => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })
    dispatch(putData(`permission/${oneItem.id}`, body, closeModal));
  }

  useEffect(() => {
    setInputs(inputs.map((input) => ({
      ...input,
      value: oneItem[input.name_in_db]
    })))
  }, [oneItem]);

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
                  title={'Uredi pravo'}
                />
              </Box>
              <form>
                <InputForm inputs={inputs} setInputs={setInputs} xs={12} md={12} lg={12} validation={validation}></InputForm>
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

export default EditModal;