import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Orgabisms
import DocumentPreview from 'Components/organisms/persons/DocumentPreview'

// Actions
import { getOneItemPerson } from "Modules/units/Persons";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  },
  documents: {
    paddingBottom: '8px',
    borderBottom: `1px solid #e0e0e0`
  }
}));

const PersonDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openPreview, setOpenPreview] = useState(false)
  
  const id = history.location.state;
  const person = useSelector(state => state.persons.oneItem);

  useEffect(() => {
    dispatch(getOneItemPerson(`person/${id}`))
  }, [])

  return (
    <div>
      <Grid>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Pregled detalja osobe'}
          />
        </Box>
        <Box mt={3} mb={5}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={3}> 
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Ime'}
                />
                {person.first_name || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Prezime'}
                />
                {person.last_name || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                    variant="h6"
                    align={'left'}
                    title={'Djevojačko prezime'}
                  />
                {person.maiden_name || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'JMBG'}
                />
                {person.identity_number || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}> 
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Datum rođenja'}
                />
                {person.birth_date || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Mjesto rođenja'}
                />
                {person.city ? person.city.name : '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Prebivalište'}
                />
                {person.domicile || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Majka'}
                />
                {person.mother ? person.mother.first_name : '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Otac'}
                />
                {person.father ? person.father.first_name : '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
              <Title
                variant="h6"
                align={'left'}
                title={'Župa'}
              />
              {person.district ? person.district.name : '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
              <Title
                variant="h6"
                align={'left'}
                title={'Religija'}
              />
              {person.religion ? person.religion.value : '-'}
              </Container>
            </Grid>
          </Grid>
        </Box>
        <Box mx={3} className={classes.documents}>
          <Title
            variant="h6"
            align={'left'}
            title={'Dokumenti'}
          />
        </Box>
        <Box mt={3} mb={4}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item> 
              <Container>
                <ButtonWithIcon 
                  label="Krsni list"
                  icon={'open_in_new'}
                  size="20px"
                  onClick={() => setOpenPreview(true)}
                />
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <DocumentPreview
        onOpen={openPreview} 
        closeModal={() => setOpenPreview(false)} 
      ></DocumentPreview>
    </div>
  )
}

export default PersonDetails
