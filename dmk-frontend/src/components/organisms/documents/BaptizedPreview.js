import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// React pdf
import { PDFDownloadLink } from "@react-pdf/renderer";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container, Modal, Backdrop, Fade} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";
import Button from "Components/atoms/buttons/Button";

// Utils
import { formatLocalDate } from 'Util/common'

// Models
import { NoteForm } from 'Pages/baptized/model/baptized'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";
import InputForm from "Components/molecules/InputForm"

// Organisms
import BaptizedPdf from 'Components/organisms/documents/BaptizedPdf'

// Actions
import { putData } from "Modules/units/Notes";
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
    padding: theme.spacing(0, 5 , 10)
  },
  title: {
    borderBottom: '1px solid #e0e0e0',
    height: '80px'
  },
}));

const DocumentPreview = ({ onOpen, closeModal }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(NoteForm)
  const baptized = useSelector(state => state.baptized.oneItem);
  const validation = useSelector(state => state.validation)

  const fullName = `${baptized.person && baptized.person.first_name} ${baptized.person && baptized.person.last_name}`;

  useEffect(() => {
    setInputs(inputs.map((input) => ({
      ...input,
      value: baptized.note && baptized.note[input.name_in_db] || ''
    })))
  }, [baptized]);

  useEffect(() => {
    clearInputs()
    dispatch(clearValidation())
  }, [])
  
  const clearInputs = () => {
    setInputs(inputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      name_in_db: input.name_in_db,
      service: input.service,
      validation: null,
      error: false,
      value: ""
    })));
  }

  const editItem = (e) => {
    e.preventDefault();

    const body = {};

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
    })
    dispatch(putData(`note/${baptized.note.id}`, body));
  }

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
                  <PDFDownloadLink
                    document={<BaptizedPdf baptized={baptized}/>}
                    fileName={`Krsni list - ${fullName}.pdf`}
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
                    {
                      baptized.person && baptized.person.maiden_name
                      ?
                      <Grid item xs={4}>
                        <Title
                          variant="h6"
                          align={'left'}
                          title={'Djevojačko prezime'}
                        />
                        {(baptized.person && baptized.person.maiden_name) || '-'}
                      </Grid>
                      : null
                    }
                    
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
                      {(baptized.father && baptized.father_religion && `${baptized.father.first_name} ${baptized.father.last_name} ${baptized.father_religion.value}`) || '-'}
                    </Grid>
                    <Grid item xs={4}>
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Majka'}
                      />
                      {(baptized.mother && baptized.mother_religion && `${baptized.mother.first_name} ${baptized.mother.last_name} ${baptized.mother_religion.value}`) || '-'}
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
                      {(baptized.best_man && `${baptized.best_man.first_name}, ${baptized.best_man.last_name}`) || '-'}
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
              <Box mt={4}>
              <Box mb={2}>
                <Title
                  variant={'h6'}
                  align={'center'}
                  title={'Bilješke'}
                  bgColor={'#8e93b9'}
                />
              </Box>
              <Box>
                  <Grid container alignItems="center" spacing={3}>
                    {
                      baptized.note && baptized.chrism_city
                      ? 
                      <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Mjesto potvrde'}
                      />
                      {baptized.chrism_city.name}
                      </Grid>
                      : null
                    }
                    {
                      baptized.note && baptized.note.chrism_date
                      ? 
                      <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum potvrde'}
                      />
                      {formatLocalDate(baptized.note.chrism_date)}
                      </Grid>
                      : null
                    }
                    {
                      baptized.note && baptized.marriage_district
                      ? 
                      <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Župa ženidbe'}
                      />
                      {baptized.marriage_district.name}
                      </Grid>
                      : null
                    }
                    {
                      baptized.note && baptized.note.marriage_date
                      ? 
                      <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Datum ženidbe'}
                      />
                      {formatLocalDate(baptized.note.marriage_date)}
                      </Grid>
                      : null
                    }
                    {
                      baptized.note && baptized.note.spouse_name
                      ? 
                      <Grid item xs={4}> 
                      <Title
                        variant="h6"
                        align={'left'}
                        title={'Ime supruga-e'}
                      />
                      {baptized.note.spouse_name}
                      </Grid>
                      : null
                    }
                </Grid>
              </Box>
            </Box>
            <Box mt={3}>
            <form>
              <InputForm inputs={inputs} setInputs={setInputs} xs={12} md={12} lg={12} spacing={2} validation={validation}></InputForm>
              <Box mt={2}>
                <Button
                  label="+ Ažuriraj bilješke"
                  onClick={editItem}
                />
              </Box>
            </form>
            </Box>
            </Grid>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default DocumentPreview;