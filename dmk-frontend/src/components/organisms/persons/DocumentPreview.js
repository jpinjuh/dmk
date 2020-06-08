import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Actions
import { getOneItemPerson } from "Modules/units/Persons";

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
    padding: theme.spacing(0, 5 , 10)
  },
  title: {
    borderBottom: '1px solid #e0e0e0',
    height: '80px'
  },
}));

const DocumentPreview = ({ onOpen, closeModal }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const id = history.location.state;
  const person = useSelector(state => state.persons.oneItem);

  useEffect(() => {
    dispatch(getOneItemPerson(`person/${id}`))
  }, [])

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
          <Container className={classes.paper} maxWidth="md">
            <Grid>
              <Box className={classes.title} display="flex" alignItems="center" justifyContent="center">
                <Title
                  variant="h5"
                  align={'center'}
                  title={'Krsni list'}
                />
              </Box>
              <Box>
                <Box my={2} display="flex" justifyContent="flex-end">
                  <ButtonWithIcon 
                    label="Isprintaj"
                    icon={'print'}
                    size="16px"
                  />
                </Box>
                <Box>
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Ime'}
                      />
                      {person.first_name || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prezime'}
                      />
                      {person.last_name || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                          variant="h6"
                          align={'left'}
                          title={'Djevojačko prezime'}
                        />
                      {person.maiden_name || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'JMBG'}
                      />
                      {person.identity_number || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja'}
                      />
                      {person.birth_date || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja'}
                      />
                      {person.city ? person.city.name : '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prebivalište'}
                      />
                      {person.domicile || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka'}
                      />
                      {person.mother ? person.mother.first_name : '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac'}
                      />
                      {person.father ? person.father.first_name : '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Župa'}
                      />
                      {person.district ? person.district.name : '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Religija'}
                      />
                      {person.religion ? person.religion.value : '-'}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default DocumentPreview;