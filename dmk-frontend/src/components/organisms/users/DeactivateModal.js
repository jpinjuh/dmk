import React from 'react';
import { useDispatch } from "react-redux";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MUIButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title"

// Actions
import { deactivateData } from "Modules/units/Users";

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

const DeactivateModal = ({ onDeactivate, closeDeactivate, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    e.preventDefault();

    dispatch(deactivateData(`user/${itemId}`))
    closeDeactivate();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={onDeactivate}
        onClose={closeDeactivate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={onDeactivate}>
          <div className={classes.paper}>
            <Box display="flex" flexDirection="column" p={2}>
              <Box mb={3}>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Jeste li sigurni da želite deaktivirati odabrani grad?'}
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
                    onClick={closeDeactivate}
                    className={classes.button}
                  >Otkaži</MUIButton>
                </Box>
              </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DeactivateModal;