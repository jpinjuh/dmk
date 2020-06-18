import React from "react";
import moment from 'moment';

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
    left: '155px',
    top: '88px',
  },
  district: {
    position: 'absolute',
    top: '114px',
    left: '125px',
  },
  num: {
    position: 'absolute',
    top: '129px',
    left: '112px',
  },
  rimDistrict: {
    position: 'absolute',
    top: '228px',
    left: '250px'
  },
  svezak: {
    position: 'absolute',
    top: '254px',
    left: '130px'
  },
  year: {
    position: 'absolute',
    top: '254px',
    left: '245px'
  },
  page: {
    position: 'absolute',
    top: '254px',
    left: '350px'
  },
  broj: {
    position: 'absolute',
    top: '254px',
    left: '422px'
  },
  baptDate: {
    position: 'absolute',
    top: '289px',
    left: '245px'
  },
  name: {
    position: 'absolute',
    top: '312px',
    left: '245px'
  },
  circleMen: {
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: '303px',
    left: '425px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  circleWoman:{
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: '303px',
    left: '483px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  lastName: {
    position: 'absolute',
    top: '335px',
    left: '245px'
  },
  birthDate: {
    position: 'absolute',
    top: '358px',
    left: '245px',
    fontSize: '10px'
  },
  birthPlace: {
    position: 'absolute',
    top: '381px',
    left: '245px'
  },
  jmbg: {
    position: 'absolute',
    top: '404px',
    left: '245px'
  },
  domicile: {
    position: 'absolute',
    top: '427px',
    left: '245px'
  },
  father: {
    position: 'absolute',
    top: '450px',
    left: '245px'
  },
  mother: {
    position: 'absolute',
    top: '473px',
    left: '245px'
  },
  canocicallyMarried: {
    position: 'absolute',
    top: '496px',
    left: '245px'
  },
  bestMan: {
    position: 'absolute',
    top: '519px',
    left: '245px'
  },
  actPerformed: {
    position: 'absolute',
    top: '542px',
    left: '245px'
  },
  notes: {
    position: 'absolute',
    top: '578px',
    left: '80px',
    height: '100px',
    width: '437px',
    fontSize: '8px'
  },
  todayDate: {
    position: 'absolute',
    top: '732px',
    left: '148px'
  }
});

const today = moment().format('D.M.YYYY');

const BaptizedPdf = ({baptized}) =>{
  //const baptized = useSelector(state => state.baptized.oneItem);
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
          <Text style={styles.father}>{(baptized.father && baptized.father.first_name) || '-'}</Text>
          <Text style={styles.mother}>{(baptized.mother && baptized.mother.first_name) || '-'}</Text>
          <Text style={styles.canocicallyMarried}>{baptized.parents_canonically_married && baptized.parents_canonically_married.value}</Text>
          <Text style={styles.bestMan}>{baptized.best_man && baptized.best_man.first_name}</Text>
          <Text style={styles.actPerformed}>{baptized.act_performed && `${baptized.act_performed.title} ${baptized.act_performed.first_name} ${baptized.act_performed.last_name}`}</Text>
          <Text style={styles.notes}>{(baptized.note && baptized.note.other_notes) || '-'}</Text>
          <Text style={styles.todayDate}>{formatLocalDate(baptized.created_at)}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default BaptizedPdf;