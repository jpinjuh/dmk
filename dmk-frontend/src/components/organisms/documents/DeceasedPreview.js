import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// React pdf
import { PDFDownloadLink } from "@react-pdf/renderer";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";

// Utils
import { formatLocalDate } from 'Util/common'
import { capitalize } from 'Util/common'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Organisms
import DeceasedPdf from 'Components/organisms/documents/DeceasedPdf'

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

const DeceasedPreview = ({ onOpen, closeModal }) => {
  const classes = useStyles();

  const deceased = useSelector(state => state.deceased.oneItem);
  const fullName = `${deceased.person && deceased.person.first_name} ${deceased.person && deceased.person.last_name}`;


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
                  title={'Smrtni list'}
                />
              </Box>
              <Box>
                <Box my={2} display="flex" justifyContent="flex-end">
                  <PDFDownloadLink
                    document={<DeceasedPdf deceased={deceased}/>}
                    fileName={`Smrtni list - ${fullName}.pdf`}
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
                      {deceased.person && deceased.person.first_name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Spol'}
                      />
                      {deceased.gender && 
                        deceased.gender.value === 'Sin'
                        ? 'Muško'
                        : 'Žensko'
                      }
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prezime'}
                      />
                      {deceased.person && deceased.person.last_name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja'}
                      />
                      {(deceased.person && formatLocalDate(deceased.person.birth_date)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja'}
                      />
                      {(deceased.birth_place && deceased.birth_place.name) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Župa krštenja'}
                      />
                      {(deceased.district_baptism && deceased.district_baptism.name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum krštenja'}
                      />
                      {(deceased.district_baptism && formatLocalDate(deceased.district_baptism.created_at)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Suprug/a'}
                      />
                      {(deceased.spouse && deceased.spouse.first_name) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac'}
                      />
                      {(deceased.father && `${deceased.father.first_name}, ${deceased.father.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka'}
                      />
                      {(deceased.mother && `${deceased.mother.first_name}, ${deceased.mother.maiden_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Proviđen sakramentima'}
                      />
                      {(deceased.sacraments && capitalize(deceased.sacraments)) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto i datum pokopa'}
                      />
                      {(deceased.place_of_burial && `${deceased.place_of_burial.value} ${formatLocalDate(deceased.place_of_burial.created_at)}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Crkveni službenik sprovoda'}
                      />
                      {(deceased.act_performed && `${deceased.act_performed.title} ${deceased.act_performed.first_name} ${deceased.act_performed.last_name}`) || '-'}
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

export default DeceasedPreview;