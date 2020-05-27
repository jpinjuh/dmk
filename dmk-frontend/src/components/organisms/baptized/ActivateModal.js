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
import { activateData } from "Modules/units/Baptized";

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
    fontSize: '14px',
    borderRadius: '5',
    textTransform: 'none'
  },
}));

const ActivateModal = ({ onActivate, closeActivate, itemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const activateItem = (e) => {
    e.preventDefault();
    
    dispatch(activateData(`user/activate`, {id: itemId}))
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
                  title={'Jeste li sigurni da želite aktivirati odabranog krštenika?'}
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

export default ActivateModal;