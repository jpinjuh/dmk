import React from "react";
import moment from 'moment';

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
    top: '84px',
  },
  district: {
    position: 'absolute',
    top: '117px',
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
    top: '359px',
    left: '446px',
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
    top: '569px',
    left: '265px'
  },
  sakrament: {
    position: 'absolute',
    top: '595px',
    left: '265px'
  },
  deathPlaceAndDate: {
    position: 'absolute',
    top: '620px',
    left: '265px'
  },
  actPerformed: {
    position: 'absolute',
    top: '646px',
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
    top: '732px',
    left: '215px'
  }
});

const today = moment().format('D.M.YYYY');

const PdfDocument = () =>{
  return (
    <Document>
      <Page size="A4">
        <View style={styles.text}>
          <Text style={styles.arch}>Mostarsko-duvanjska</Text>
          <Text style={styles.district}>Balinovac</Text>
          <Text style={styles.num}>125795</Text>
          <Text style={styles.rimDistrict}>Rim Župa</Text>
          <Text style={styles.svezak}>78</Text>
          <Text style={styles.year}>2019.</Text>
          <Text style={styles.page}>6</Text>
          <Text style={styles.broj}>23</Text>
          <Text style={styles.deathDate}>01.01.2020</Text>
          <Text style={styles.deathPlace}>Mostar</Text>
          <Text style={styles.name}>Ivan</Text>
          <Text style={styles.circleMen}></Text>
         {/*  <Text style={styles.circleWoman}></Text> */}
          <Text style={styles.lastName}>Horvat</Text>
          <Text style={styles.birthDate}>01.01.1920</Text>
          <Text style={styles.birthPlace}>Mostar</Text>
          <Text style={styles.baptDistrict}>Mostar</Text>
          <Text style={styles.baptDate}>01.03.1920</Text>
          <Text style={styles.wife}>Ana Horvat</Text>
          <Text style={styles.father}>Marko Horvat</Text>
          <Text style={styles.mother}>Ivana Marković</Text>
          <Text style={styles.sakrament}>Krštenje, Krizma</Text>
          <Text style={styles.deathPlaceAndDate}>Horvat</Text>
          <Text style={styles.actPerformed}>Fratar Fratrić</Text>
          <Text style={styles.notes}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
          <Text style={styles.todayDate}>{today}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;