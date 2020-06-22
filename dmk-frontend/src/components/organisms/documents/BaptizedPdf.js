import React from "react";

// Utils
import { formatLocalDate } from 'Util/common'

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
    fontSize: '10px',
    fontFamily: 'Roboto'
  },
  arch: {
    position: 'absolute',
    left: '150px',
    top: '85px',
  },
  district: {
    position: 'absolute',
    top: '113px',
    left: '120px',
  },
  num: {
    position: 'absolute',
    top: '128px',
    left: '102px',
  },
  rimDistrict: {
    position: 'absolute',
    top: '229px',
    left: '245px'
  },
  svezak: {
    position: 'absolute',
    top: '255px',
    left: '130px'
  },
  year: {
    position: 'absolute',
    top: '255px',
    left: '247px'
  },
  page: {
    position: 'absolute',
    top: '255px',
    left: '352px'
  },
  broj: {
    position: 'absolute',
    top: '255px',
    left: '424px'
  },
  baptDate: {
    position: 'absolute',
    top: '290px',
    left: '245px'
  },
  name: {
    position: 'absolute',
    top: '314px',
    left: '245px'
  },
  circleMen: {
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: '304px',
    left: '428px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  circleWoman:{
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: '304px',
    left: '486px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  lastName: {
    position: 'absolute',
    top: '337px',
    left: '245px'
  },
  birthDate: {
    position: 'absolute',
    top: '361px',
    left: '245px',
    fontSize: '10px'
  },
  birthPlace: {
    position: 'absolute',
    top: '385px',
    left: '245px'
  },
  jmbg: {
    position: 'absolute',
    top: '408px',
    left: '245px'
  },
  domicile: {
    position: 'absolute',
    top: '431px',
    left: '245px'
  },
  father: {
    position: 'absolute',
    top: '454px',
    left: '245px'
  },
  mother: {
    position: 'absolute',
    top: '478px',
    left: '245px'
  },
  canocicallyMarried: {
    position: 'absolute',
    top: '501px',
    left: '245px'
  },
  bestMan: {
    position: 'absolute',
    top: '525px',
    left: '245px'
  },
  actPerformed: {
    position: 'absolute',
    top: '549px',
    left: '245px'
  },
  notes: {
    position: 'absolute',
    top: '562px',
    left: '80px',
    height: '100px',
    width: '437px',
    fontSize: '8px'
  },
  todayDate: {
    position: 'absolute',
    top: '741px',
    left: '148px'
  }
});


const BaptizedPdf = ({baptized}) =>{
  return (
    <Document>
      <Page size="A4">
        <View style={styles.text}>
          <Text style={styles.arch}>{baptized.archdiocese && baptized.archdiocese.name}</Text>
          <Text style={styles.district}>{baptized.district && baptized.district.address}</Text>
          <Text style={styles.num}>{baptized.document && baptized.document.document_number}</Text>
          <Text style={styles.rimDistrict}>{baptized.district && baptized.district.name}</Text>
          <Text style={styles.svezak}>{baptized.document && baptized.document.volume}</Text>
          <Text style={styles.year}>{baptized.document && baptized.document.year}</Text>
          <Text style={styles.page}>{baptized.document && baptized.document.page}</Text>
          <Text style={styles.broj}>{baptized.document && baptized.document.number}</Text>
          <Text style={styles.baptDate}>{baptized.document && formatLocalDate(baptized.document.act_date)}</Text>
          <Text style={styles.name}>{baptized.person && baptized.person.first_name}</Text>
          {
            (baptized.child && baptized.child.value==='Sin')
            ? <Text style={styles.circleMen}></Text>
            : <Text style={styles.circleWoman}></Text>
          }
          <Text style={styles.lastName}>{baptized.person && baptized.person.last_name}</Text>
          <Text style={styles.birthDate}>{baptized.person && formatLocalDate(baptized.person.birth_date)}</Text>
          <Text style={styles.birthPlace}>{baptized.birth_place && baptized.birth_place.name}</Text>
          <Text style={styles.jmbg}>{baptized.person && baptized.person.identity_number}</Text>
          <Text style={styles.domicile}>{baptized.person && baptized.person.domicile}</Text>
          <Text style={styles.father}>{(baptized.father && baptized.father_religion && `${baptized.father.first_name}, ${baptized.father.last_name}, ${baptized.father_religion.value}`) || '-'}</Text>
          <Text style={styles.mother}>{(baptized.mother && baptized.mother_religion && `${baptized.mother.first_name}, ${baptized.mother.maiden_name}, ${baptized.mother_religion.value}`) || '-'}</Text>
          <Text style={styles.canocicallyMarried}>{baptized.parents_canonically_married && baptized.parents_canonically_married.value}</Text>
          <Text style={styles.bestMan}>{baptized.best_man && `${baptized.best_man.first_name}, ${baptized.best_man.last_name}`}</Text>
          <Text style={styles.actPerformed}>{baptized.act_performed && `${baptized.act_performed.title} ${baptized.act_performed.first_name} ${baptized.act_performed.last_name}`}</Text>
          <Text style={styles.notes}>
            {baptized.note &&
              `
              Mjesto potvrde: ${baptized.chrism_city && baptized.chrism_city.name || '-'} , 
              Datum potvrde: ${baptized.note.chrism_date && formatLocalDate(baptized.note.chrism_date) || '-'} , 
              Župa ženidbe: ${baptized.note.marriage_district || '-'} , 
              Datum ženidbe: ${baptized.note.chrism_date && formatLocalDate(baptized.note.marriage_date) || '-'} , 
              Ime supruga-e: ${baptized.note.spouse_name || '-'} , 
              Ostale bilješke: ${baptized.note.other_notes || '-'} , 
              `
            }
          </Text>
          <Text style={styles.todayDate}>{formatLocalDate(baptized.created_at)}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default BaptizedPdf;