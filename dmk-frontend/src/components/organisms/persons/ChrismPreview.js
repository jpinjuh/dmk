import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// React pdf
import { PDFDownloadLink } from "@react-pdf/renderer";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";
import { formatLocalDate } from 'Util/common'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Organisms


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

const ChrismPreview = ({ onOpen, closeModal }) => {
  const classes = useStyles();

  const chrisms = useSelector(state => state.chrisms.oneItem);


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
                  title={'Krizmena cedulja'}
                />
              </Box>
              <Box>
              
                <Box>
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Ime'}
                      />
                      {chrisms.person && chrisms.person.first_name}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prezime'}
                      />
                      {chrisms.person && chrisms.person.last_name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja'}
                      />
                      {(chrisms.person && formatLocalDate(chrisms.person.birth_date)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja'}
                      />
                      {(chrisms.birth_place && chrisms.birth_place.name) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Župa krštenja'}
                      />
                      {(chrisms.district_baptism && chrisms.district_baptism.name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum krštenja'}
                      />
                      {(chrisms.district_baptism && formatLocalDate(chrisms.district_baptism.act_date)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto stanovanja'}
                      />
                      {(chrisms.person && chrisms.person.domicile) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac'}
                      />
                      {(chrisms.father && `${chrisms.father.first_name}, ${chrisms.father.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka, djevojačko prezime'}
                      />
                      {(chrisms.mother && `${chrisms.mother.first_name}, ${chrisms.mother.maiden_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Kum/a, župa'}
                      />
                      {(chrisms.best_man && `${chrisms.best_man.first_name} ${chrisms.best_man.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Djelitelj krizme, služba'}
                      />
                      {(chrisms.act_performed && `${chrisms.act_performed.title} ${chrisms.act_performed.first_name} ${chrisms.act_performed.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto krizme'}
                      />
                      {/*(chrisms.person && formatLocalDate(chrisms.person.birth_date)) || '-'*/'Mjesto krizme'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum krizme'}
                      />
                      {(chrisms.document_chrism && formatLocalDate(chrisms.document_chrism.act_date)) || '-'}
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

export default ChrismPreview;