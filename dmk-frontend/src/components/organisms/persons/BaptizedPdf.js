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
    left: '265px'
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

const BaptizedPdf = () =>{
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
          <Text style={styles.baptDate}>01.01.2020</Text>
          <Text style={styles.name}>Ivan</Text>
          <Text style={styles.circleMen}></Text>
          {/* <Text style={styles.circleWoman}></Text> */}
          <Text style={styles.lastName}>Horvat</Text>
          <Text style={styles.birthDate}>01.01.1920</Text>
          <Text style={styles.birthPlace}>Mostar</Text>
          <Text style={styles.jmbg}>1902997152732</Text>
          <Text style={styles.domicile}>Mostar</Text>
          <Text style={styles.father}>Marko Horvat</Text>
          <Text style={styles.mother}>Ivana Marković</Text>
          <Text style={styles.canocicallyMarried}>Da</Text>
          <Text style={styles.bestMan}>Ivan Ivančić</Text>
          <Text style={styles.actPerformed}>Fratar Fratrić</Text>
          <Text style={styles.notes}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
          <Text style={styles.place}>Mostaru</Text>
          <Text style={styles.todayDate}>{today}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default BaptizedPdf;