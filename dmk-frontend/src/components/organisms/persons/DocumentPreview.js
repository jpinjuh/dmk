import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";
import { formatLocalDate } from 'Util/common'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";


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
  const classes = useStyles();

  const baptized = useSelector(state => state.baptized.oneItem);


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
                      {baptized.person && baptized.person.first_name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Sin/Kći'}
                      />
                      {baptized.child && baptized.child.value}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prezime'}
                      />
                      {baptized.person && baptized.person.last_name}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                          variant="h6"
                          align={'left'}
                          title={'Djevojačko prezime'}
                        />
                      {(baptized.person && baptized.person.maiden_name) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja'}
                      />
                      {(baptized.person && formatLocalDate(baptized.person.birth_date)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja'}
                      />
                      {(baptized.birth_place && baptized.birth_place.name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'JMBG'}
                      />
                      {(baptized.person && baptized.person.identity_number) || '-'}
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prebivalište'}
                      />
                      {(baptized.person && baptized.person.domicile) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac'}
                      />
                      {(baptized.father && baptized.father.first_name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka'}
                      />
                      {(baptized.mother && baptized.mother.first_name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Roditelji kanonski vjenčani'}
                      />
                      {(baptized.parents_canonically_married && baptized.parents_canonically_married.value) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Kum'}
                      />
                      {(baptized.best_man && baptized.best_man.first_name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Krstitelj'}
                      />
                      {(baptized.act_performed && `${baptized.act_performed.title} ${baptized.act_performed.first_name} ${baptized.act_performed.last_name}`) || '-'}
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