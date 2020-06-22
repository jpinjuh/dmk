import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Container} from '@material-ui/core';

// Atoms
import Title from "Components/atoms/UI/Title";
import { formatLocalDate } from 'Util/common'

// Molecules
import ButtonWithIcon from "Components/molecules/ButtonWithIcon";

// Organisms
import BaptizedPreview from 'Components/organisms/documents/BaptizedPreview'
import DeceasedPreview from 'Components/organisms/documents/DeceasedPreview'
import ChrismPreview from 'Components/organisms/documents/ChrismPreview'
import MarriagePreview from 'Components/organisms/documents/MarriagePreview'

// Actions
import { getOneItem as getBaptized } from "Modules/units/Baptized";
import { getOneItem as getDeceased } from "Modules/units/Deceased";
import { getOneItem as getChrisms } from "Modules/units/Chrisms";
import { getOneItem as getMarriages } from "Modules/units/Marriages";
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
  const [openBaptized, setOpenBaptized] = useState(false)
  const [openDeceased, setOpenDeceased] = useState(false)
  const [openChrisms, setOpenChrisms] = useState(false)
  const [openMarriages, setOpenMarriages] = useState(false)

  const id = history.location.state;
  const person = useSelector(state => state.persons.oneItem);

  useEffect(() => {
    dispatch(getOneItemPerson(`person/${id}`))
  }, [])

/*
  const documentType = (index, item) => {
    switch(index) {
      case 0:
        return () => setSelectedDocument(
          {
            label: 'Krsni list',

          }
        )
        break;
      case 1:
        return 'Smrtni list'
        break;
      default:
        return 'Vjenčani list'
    }
  }

  const documentUrl = (index, item) => {
    switch(index) {
      case 0:
        return `registry_od_baptism/${item.id}`
        break;
      case 1:
        return `registry_od_death/${item.id}`
        break;
      default:
        return 'Vjenčani list'
    }
  }
*/
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
                {formatLocalDate(person.birth_date) || '-'}
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container>
                <Title
                  variant="h6"
                  align={'left'}
                  title={'Mjesto rođenja'}
                />
                {person.birth_place ? person.birth_place.name : '-'}
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
        <Box mt={3} mb={4} display="flex">
          {person.documents && person.documents[0] &&
            <Grid container item alignItems="center" spacing={2} xs={2}>
              <Grid item>
                <Container>
                  <ButtonWithIcon
                    label={'Krsni List'}
                    icon={'open_in_new'}
                    size="20px"
                    onClick={() => dispatch(getBaptized(`registry_of_baptism/${person.documents[0].id}`, setOpenBaptized))}
                  />
                </Container>
              </Grid>
            </Grid>
          }
          {person.documents && person.documents[1] &&
            <Grid container item alignItems="center" spacing={2} xs={2}>
              <Grid item>
                <Container>
                  <ButtonWithIcon
                    label={'Krizmena Cedulja'}
                    icon={'open_in_new'}
                    size="20px"
                    onClick={() => dispatch(getChrisms(`chrism_note/${person.documents[1].id}`, setOpenChrisms))}
                  />
                </Container>
              </Grid>
            </Grid>
          }
          {person.documents && person.documents[2] &&
            <Grid container item alignItems="center" spacing={2} xs={2}>
              <Grid item>
                <Container>
                  <ButtonWithIcon
                    label={'Vjenčani List'}
                    icon={'open_in_new'}
                    size="20px"
                    onClick={() => dispatch(getMarriages(`registry_of_marriage/${person.documents[2].id}`, setOpenMarriages))}
                  />
                </Container>
              </Grid>
            </Grid>
          }
          {person.documents && person.documents[3] &&
            <Grid container item alignItems="center" spacing={2} xs={2}>
              <Grid item>
                <Container>
                  <ButtonWithIcon
                    label={'Smrtni List'}
                    icon={'open_in_new'}
                    size="20px"
                    onClick={() => dispatch(getDeceased(`registry_of_deaths/${person.documents[3].id}`, setOpenDeceased))}
                  />
                </Container>
              </Grid>
            </Grid>
          }
        </Box>
      </Grid>

      <BaptizedPreview
        onOpen={openBaptized}
        closeModal={() => setOpenBaptized(false)}
      />
      <DeceasedPreview
        onOpen={openDeceased}
        closeModal={() => setOpenDeceased(false)}
      />
      <ChrismPreview
        onOpen={openChrisms}
        closeModal={() => setOpenChrisms(false)}
      />
      <MarriagePreview
        onOpen={openMarriages}
        closeModal={() => setOpenMarriages(false)}
      />
    </div>
  )
}

export default PersonDetails
