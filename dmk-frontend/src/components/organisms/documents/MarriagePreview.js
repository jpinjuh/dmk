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
import MarriagePdf from 'Components/organisms/documents/MarriagePdf'

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

const MarriagePreview = ({ onOpen, closeModal }) => {
  const classes = useStyles();

  const marriages = useSelector(state => state.marriages.oneItem);

  const fullName = `${marriages.person1 && marriages.person1.first_name} ${marriages.person1 && marriages.person1.last_name} & ${
                    marriages.person2 && marriages.person2.first_name} ${marriages.person2 && marriages.person2.last_name}`;

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
                  title={'Vjenčani list'}
                />
              </Box>
              <Box>
              <Box my={2} display="flex" justifyContent="flex-end">
                <PDFDownloadLink
                  document={<MarriagePdf marriages={marriages} />}
                  fileName={`Vjenčani list - ${fullName}.pdf`}
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
                        title={'Datum vjenčanja'}
                      />
                      {marriages.document_marriage && formatLocalDate(marriages.document_marriage.act_date)}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Zaručnik'}
                      />
                      {marriages.person1 && `${marriages.person1.first_name} ${marriages.person1.last_name}`}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Zaručnica'}
                      />
                      {marriages.person2 && `${marriages.person2.first_name} ${marriages.person2.last_name}`}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja (zaručnik)'}
                      />
                      {marriages.person1 && formatLocalDate(marriages.person1.birth_date)}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum rođenja (zaručnica)'}
                      />
                      {marriages.person2 && formatLocalDate(marriages.person2.birth_date)}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja (zaručnik)'}
                      />
                      {marriages.person1_birth_place && marriages.person1_birth_place.name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto rođenja (zaručnica)'}
                      />
                      {marriages.person2_birth_place && marriages.person2_birth_place.name}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prebivalište (zaručnik)'}
                      />
                      {marriages.person1 && marriages.person1.domicile}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Prebivalište (zaručnica)'}
                      />
                      {marriages.person2 && marriages.person2.domicile}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac (zaručnik)'}
                      />
                      {(marriages.person1_father && `${marriages.person1_father.first_name} ${marriages.person1_father.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Otac (zaručnica)'}
                      />
                      {(marriages.person2_father && `${marriages.person2_father.first_name} ${marriages.person2_father.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka (zaručnik)'}
                      />
                      {(marriages.person1_mother && `${marriages.person1_mother.first_name} ${marriages.person1_mother.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka (zaručnica)'}
                      />
                      {(marriages.person2_mother && `${marriages.person2_mother.first_name} ${marriages.person2_mother.last_name}`) || '-'}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Kum'}
                      />
                      {marriages.best_man1 && `${marriages.best_man1.first_name} ${marriages.best_man1.last_name}`}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Kuma'}
                      />
                      {marriages.best_man2 && `${marriages.best_man2.first_name} ${marriages.best_man2.last_name}`}
                    </Grid>
                    <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Vjenčatelj'}
                      />
                      {marriages.act_performed && `${marriages.act_performed.title} ${marriages.act_performed.first_name} ${marriages.act_performed.last_name}`}
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

export default MarriagePreview;