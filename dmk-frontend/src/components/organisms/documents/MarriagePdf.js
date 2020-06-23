import React from "react";

// moment
import moment from 'moment';

// Utils
import { formatLocalDate } from 'Util/common'
import { capitalize } from 'Util/common'

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});
const styles = StyleSheet.create({
  text: {
    fontSize: '8px',
    fontFamily: 'Roboto'
  },
  arch: {
    position: 'absolute',
    left: '155px',
    top: '87px',
  },
  district: {
    position: 'absolute',
    top: '120px',
    left: '125px',
  },
  num: {
    position: 'absolute',
    top: '150px',
    left: '120px',
  },
  rimDistrict: {
    position: 'absolute',
    top: '209px',
    left: '250px'
  },
  svezak: {
    position: 'absolute',
    top: '244px',
    left: '130px'
  },
  year: {
    position: 'absolute',
    top: '244px',
    left: '236px'
  },
  page: {
    position: 'absolute',
    top: '244px',
    left: '346px'
  },
  broj: {
    position: 'absolute',
    top: '244px',
    left: '432px'
  },
  marriageDate: {
    position: 'absolute',
    top: '290px',
    left: '260px'
  },
  person1Name: {
    position: 'absolute',
    top: '335px',
    left: '260px'
  },
  person2Name: {
    position: 'absolute',
    top: '335px',
    left: '395px'
  },
  person1LastName: {
    position: 'absolute',
    top: '360px',
    left: '260px'
  },
  person2LastName: {
    position: 'absolute',
    top: '360px',
    left: '395px'
  },
  person1BirthDate: {
    position: 'absolute',
    top: '385px',
    left: '260px'
  },
  person2BirthDate: {
    position: 'absolute',
    top: '385px',
    left: '395px'
  },
  person1BirthPlace: {
    position: 'absolute',
    top: '410px',
    left: '260px'
  },
  person2BirthPlace: {
    position: 'absolute',
    top: '410px',
    left: '395px'
  },
  person1District: {
    width: '125px',
    position: 'absolute',
    top: '430px',
    left: '260px'
  },
  person2District: {
    width: '125px',
    position: 'absolute',
    top: '430px',
    left: '395px'
  },
  person1BaptismDate: {
    position: 'absolute',
    top: '460px',
    left: '260px'
  },
  person2BaptismDate: {
    position: 'absolute',
    top: '460px',
    left: '395px'
  },
  person1Religion: {
    position: 'absolute',
    top: '485px',
    left: '260px'
  },
  person2Religion: {
    position: 'absolute',
    top: '485px',
    left: '395px'
  },
  person1Domicile: {
    position: 'absolute',
    top: '510px',
    left: '260px'
  },
  person2Domicile: {
    position: 'absolute',
    top: '510px',
    left: '395px'
  },
  person1Father: {
    position: 'absolute',
    top: '535px',
    left: '260px'
  },
  person2Father: {
    position: 'absolute',
    top: '535px',
    left: '395px'
  },
  person1Mother: {
    position: 'absolute',
    top: '560px',
    left: '260px'
  },
  person2Mother: {
    position: 'absolute',
    top: '560px',
    left: '395px'
  },
  person1Parents: {
    position: 'absolute',
    top: '585px',
    left: '260px'
  },
  person2Parents: {
    position: 'absolute',
    top: '585px',
    left: '395px'
  },
  bestMan1: {
    position: 'absolute',
    top: '610px',
    left: '260px'
  },
  bestMan2: {
    position: 'absolute',
    top: '610px',
    left: '395px'
  },
  actPerformed: {
    position: 'absolute',
    top: '635px',
    left: '260px'
  },
  notes: {
    position: 'absolute',
    top: '656px',
    left: '183px'
  },
  todayDate: {
    position: 'absolute',
    top: '724px',
    left: '212px'
  }
});

const todayDate = formatLocalDate(new Date());

const MarriagePdf = ({marriages}) =>{

  return (
    <Document>
      <Page size="A4">
        <View style={styles.text}>
          <Text style={styles.arch}>{marriages.marriage_archdiocese && marriages.marriage_archdiocese.name}</Text>
          <Text style={styles.district}>{marriages.marriage_district && `${marriages.marriage_district.name}, ${marriages.marriage_district.address}`}</Text>
          <Text style={styles.num}>{marriages.document_marriage && marriages.document_marriage.document_number}</Text>
          <Text style={styles.rimDistrict}>{marriages.marriage_district && marriages.marriage_district.name}</Text>
          <Text style={styles.svezak}>{marriages.document_marriage && marriages.document_marriage.volume}</Text>
          <Text style={styles.year}>{marriages.document_marriage && marriages.document_marriage.year}</Text>
          <Text style={styles.page}>{marriages.document_marriage && marriages.document_marriage.page}</Text>
          <Text style={styles.broj}>{marriages.document_marriage && marriages.document_marriage.number}</Text>
          <Text style={styles.marriageDate}>{marriages.document_marriage && formatLocalDate(marriages.document_marriage.act_date)}</Text>
          <Text style={styles.person1Name}>{marriages.person1 && marriages.person1.first_name}</Text>
          <Text style={styles.person2Name}>{marriages.person2 && marriages.person2.first_name}</Text>
          <Text style={styles.person1LastName}>{marriages.person1 && marriages.person1.last_name}</Text>
          <Text style={styles.person2LastName}>{marriages.person2 && marriages.person2.last_name}</Text>
          <Text style={styles.person1BirthDate}>{marriages.person1 && formatLocalDate(marriages.person1.birth_date)}</Text>
          <Text style={styles.person2BirthDate}>{marriages.person2 && formatLocalDate(marriages.person2.birth_date)}</Text>
          <Text style={styles.person1BirthPlace}>{marriages.person1_birth_place && marriages.person1_birth_place.name}</Text>
          <Text style={styles.person2BirthPlace}>{marriages.person2_birth_place && marriages.person2_birth_place.name}</Text>
          <Text style={styles.person1District}>{marriages.person1_baptism_district && marriages.person1_baptism_district.name}</Text>
          <Text style={styles.person2District}>{marriages.person2_baptism_district && marriages.person2_baptism_district.name}</Text>
          <Text style={styles.person1BaptismDate}>{marriages.person1_baptism_document && formatLocalDate(marriages.person1_baptism_document.act_date)}</Text>
          <Text style={styles.person2BaptismDate}>{marriages.person2_baptism_document && formatLocalDate(marriages.person2_baptism_document.act_date)}</Text>
          <Text style={styles.person1Religion}>{marriages.person1_religion && marriages.person1_religion.value}</Text>
          <Text style={styles.person2Religion}>{marriages.person2_religion && marriages.person2_religion.value}</Text>
          <Text style={styles.person1Domicile}>{marriages.person1 && marriages.person1.domicile}</Text>
          <Text style={styles.person2Domicile}>{marriages.person2 && marriages.person2.domicile}</Text>
          <Text style={styles.person1Father}>{marriages.person1_father && `${marriages.person1_father.first_name} ${marriages.person1_father.last_name}`}</Text>
          <Text style={styles.person2Father}>{marriages.person2_father && `${marriages.person2_father.first_name} ${marriages.person2_father.last_name}`}</Text>
          <Text style={styles.person1Mother}>{marriages.person1_mother && `${marriages.person1_mother.first_name} ${marriages.person1_mother.maiden_name}`}</Text>
          <Text style={styles.person2Mother}>{marriages.person2_mother && `${marriages.person2_mother.first_name} ${marriages.person2_mother.maiden_name || ''}`}</Text>
          <Text style={styles.person1Parents}>{marriages.person1_parents_canonically && marriages.person1_parents_canonically_married.value}</Text>
          <Text style={styles.person2Parents}>{marriages.person2_parents_canonically && marriages.person2_parents_canonically_married.value}</Text>
          <Text style={styles.bestMan1}>{marriages.best_man1 && `${marriages.best_man1.first_name} ${marriages.best_man1.last_name}`}</Text>
          <Text style={styles.bestMan2}>{marriages.best_man2 && `${marriages.best_man2.first_name} ${marriages.best_man2.last_name}`}</Text>
          <Text style={styles.actPerformed}>{marriages.act_performed && `${marriages.act_performed.title} ${marriages.act_performed.first_name} ${marriages.act_performed.last_name}`}</Text>
          <Text style={styles.notes}>{marriages.note && marriages.note.other_notes || ''}</Text>
          <Text style={styles.todayDate}>{todayDate}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MarriagePdf;