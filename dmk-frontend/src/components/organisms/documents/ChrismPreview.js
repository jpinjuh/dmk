import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// React pdf
import { PDFDownloadLink } from "@react-pdf/renderer";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// Atoms
import Title from "Components/atoms/UI/Title";
import { formatLocalDate } from 'Util/common'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Organisms
import ChrismNotePdf from 'Components/organisms/documents/ChrismNotePdf'


const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    //height:'100%',
    //display:'block'
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
  const theme = useTheme();

  const chrisms = useSelector(state => state.chrisms.oneItem);
  const fullName = `${chrisms.person && chrisms.person.first_name} ${chrisms.person && chrisms.person.last_name}`;


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
          <Container className={classes.paper} maxWidth={useMediaQuery(theme.breakpoints.up('sm')) ? 'md' : 'xs'}>
            <Grid>
              <Box className={classes.title} display="flex" alignItems="center" justifyContent="center">
                <Title
                  variant="h5"
                  align={'center'}
                  title={'Krizmena cedulja'}
                />
              </Box>
              <Box>
              <Box my={2} display="flex" justifyContent="flex-end">
                  <PDFDownloadLink
                    document={<ChrismNotePdf chrisms={chrisms}/>}
                    fileName={`Krizmena cedulja - ${fullName}.pdf`}
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    {({ blob, url, loading, error }) =>
                      loading 
                      ? "Učitavanje dokumenta..." 
                      : <ButtonWithIcon 
                          label="Isprintaj"
                          icon={'print'}
                          size="16px"
                        />
                    }
                  </PDFDownloadLink>
                </Box>
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
                      {(chrisms.baptism_district && chrisms.baptism_district.name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum krštenja'}
                      />
                      {(chrisms.document_baptism && formatLocalDate(chrisms.document_baptism.act_date)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto stanovanja'}
                      />
                      {chrisms.person && chrisms.person.domicile || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac'}
                      />
                      {chrisms.father && `${chrisms.father.first_name} ${chrisms.father.last_name}` || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka, djevojačko prezime'}
                      />
                      {chrisms.mother && `${chrisms.mother.first_name} ${chrisms.mother.maiden_name}` || '-'}
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
                      {(chrisms.chrism_district && chrisms.chrism_district.name) || '-'}
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