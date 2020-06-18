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
    top: '85px',
  },
  district: {
    position: 'absolute',
    top: '118px',
    left: '125px',
  },
  num: {
    position: 'absolute',
    top: '147px',
    left: '130px',
  },
  rimDistrict: {
    position: 'absolute',
    top: '222px',
    left: '250px'
  },
  svezak: {
    position: 'absolute',
    top: '257px',
    left: '130px'
  },
  year: {
    position: 'absolute',
    top: '257px',
    left: '236px'
  },
  page: {
    position: 'absolute',
    top: '257px',
    left: '345px'
  },
  broj: {
    position: 'absolute',
    top: '257px',
    left: '428px'
  },
  deathDate: {
    position: 'absolute',
    top: '314px',
    left: '265px'
  },
  deathPlace: {
    position: 'absolute',
    top: '340px',
    left: '265px'
  },
  name: {
    position: 'absolute',
    top: '365px',
    left: '265px'
  },
  circleMen: {
    position: 'absolute',
    width: '80px',
    height: '14px',
    top: '358px',
    left: '445px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  circleWoman:{
    position: 'absolute',
    width: '72px',
    height: '14px',
    top: '370px',
    left: '453px',
    border: '1px solid black',
    borderRadius: '50%'
  },
  lastName: {
    position: 'absolute',
    top: '391px',
    left: '265px'
  },
  birthDate: {
    position: 'absolute',
    top: '416px',
    left: '265px',
    fontSize: '10px'
  },
  birthPlace: {
    position: 'absolute',
    top: '442px',
    left: '265px'
  },
  baptDistrict: {
    position: 'absolute',
    top: '468px',
    left: '265px'
  },
  baptDate: {
    position: 'absolute',
    top: '493px',
    left: '265px'
  },
  wife: {
    position: 'absolute',
    top: '518px',
    left: '265px'
  },
  father: {
    position: 'absolute',
    top: '544px',
    left: '265px'
  },
  mother: {
    position: 'absolute',
    top: '570px',
    left: '265px'
  },
  sakrament: {
    position: 'absolute',
    top: '596px',
    left: '265px'
  },
  deathPlaceAndDate: {
    position: 'absolute',
    top: '622px',
    left: '265px'
  },
  actPerformed: {
    position: 'absolute',
    top: '648px',
    left: '265px'
  },
  notes: {
    position: 'absolute',
    top: '666px',
    left: '130px',
    height: '45px',
    width: '385px',
    fontSize: '8px'
  },
  todayDate: {
    position: 'absolute',
    top: '727px',
    left: '215px'
  },
  place: {
    position: 'absolute',
    top: '727px',
    left: '110px'
  }
});

const today = moment().format('D.M.YYYY');

const PdfDocument = ({deceased}) =>{
  return (
    <Document>
      <Page size="A4">
        <View style={styles.text}>
          <Text style={styles.arch}>{deceased.archdiocese && deceased.archdiocese.name}</Text>
          <Text style={styles.district}>{deceased.district && deceased.district.address}</Text>
          <Text style={styles.num}>{deceased.document && deceased.document.document_number}</Text>
          <Text style={styles.rimDistrict}>{deceased.district && deceased.district.name}</Text>
          <Text style={styles.svezak}>{deceased.document && deceased.document.volume}</Text>
          <Text style={styles.year}>{deceased.document && deceased.document.document_year}</Text>
          <Text style={styles.page}>{deceased.document && deceased.document.page}</Text>
          <Text style={styles.broj}>{deceased.document && deceased.document.number}</Text>
          <Text style={styles.deathDate}>{deceased.document && formatLocalDate(deceased.document.act_date)}</Text>
          <Text style={styles.deathPlace}>{deceased.place_of_death && deceased.place_of_death.name}</Text>
          <Text style={styles.name}>{deceased.person && deceased.person.first_name}</Text>
          {
            (deceased.child && deceased.child.value==='Sin')
            ? <Text style={styles.circleMen}></Text>
            : <Text style={styles.circleWoman}></Text>
          }
          <Text style={styles.lastName}>{deceased.person && deceased.person.last_name}</Text>
          <Text style={styles.birthDate}>{deceased.person && formatLocalDate(deceased.person.birth_date)}</Text>
          <Text style={styles.birthPlace}>{deceased.birth_place && deceased.birth_place.name}</Text>
          <Text style={styles.baptDistrict}>{deceased.district_baptism && deceased.district_baptism.name}</Text>
          <Text style={styles.baptDate}>{deceased.district_baptism && formatLocalDate(deceased.district_baptism.created_at)}</Text>
          <Text style={styles.wife}>{(deceased.note && deceased.note.spouse_name) || '-'}</Text>
          <Text style={styles.father}>{(deceased.father && deceased.father.name) || '-'}</Text>
          <Text style={styles.mother}>{(deceased.mother && deceased.mother.name) || '-'}</Text>
          <Text style={styles.sakrament}>Krštenje, Krizma</Text>
          <Text style={styles.deathPlaceAndDate}>{ deceased.place_of_burial && `${deceased.place_of_burial.value} ${formatLocalDate(deceased.place_of_burial.created_at)}` }</Text>
          <Text style={styles.actPerformed}>{(deceased.act_performed && `${deceased.act_performed.title} ${deceased.act_performed.first_name} ${deceased.act_performed.last_name}`) || '-'}</Text>
          <Text style={styles.notes}>{(deceased.note && deceased.note.other_notes) || '-'}</Text>
          <Text style={styles.todayDate}>{formatLocalDate(deceased.created_at)}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;