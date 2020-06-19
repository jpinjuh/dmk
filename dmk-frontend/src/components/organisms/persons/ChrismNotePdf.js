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
  page: {
    fontSize: '12px',
    fontFamily: 'Roboto'
  },
  section: {
    borderBottom: '1px dashed gray'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    margin: '40px 100px 0px'
  },
  table: { 
    display: "table", 
    width: "auto",
    margin: '20px',
    marginBottom: '40px',
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row"
  }, 
  tableCol: { 
    borderStyle: "solid",
    flexDirection: 'column', 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "auto",
    height: '100%',
    padding: '5px 10px',
    fontSize: 10,
    borderStyle: "solid",
    borderBottom: 1 
  }
});

const today = moment().format('D.M.YYYY');

const ChrismNotePdf = () =>{
  //const baptized = useSelector(state => state.baptized.oneItem);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.title}>
            <Text>KRIZMENA CEDULJA</Text>
            <Text>ŽUPA POSUŠJE</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.table}> 
            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '20%', paddingTop:'36px'}]}> 
                <Text style={styles.tableCell}>KRIZMANIK</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '30%' }]}> 
                <Text style={styles.tableCell}>Ime i prezime</Text>
                <Text style={styles.tableCell}>Mjesto i datum rođenja</Text> 
                <Text style={styles.tableCell}>Župa i datum krštenja</Text> 
                <Text style={styles.tableCell}>Mjesto stanovanja</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '50%' }]}> 
                <Text style={styles.tableCell}></Text>
                <Text style={styles.tableCell}></Text> 
                <Text style={styles.tableCell}></Text> 
                <Text style={styles.tableCell}></Text>  
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '20%', paddingTop:'12px'}]}> 
                <Text style={styles.tableCell}>RODITELJI</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '30%' }]}> 
                <Text style={styles.tableCell}>Ime oca</Text>
                <Text style={styles.tableCell}>Ime i djevojačko prezime majke</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '50%' }]}> 
                <Text style={styles.tableCell}></Text>
                <Text style={styles.tableCell}></Text> 
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '20%'}]}> 
                <Text style={styles.tableCell}>KUM/A</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '30%' }]}> 
                <Text style={styles.tableCell}>Ime i prezime, njihova župa</Text>
              </View> 
              <View style={[styles.tableCol, { width: '50%' }]}> 
                <Text style={styles.tableCell}></Text>
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '20%'}]}> 
                <Text style={styles.tableCell}>DJELITELJ KRIZME</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '30%' }]}> 
                <Text style={styles.tableCell}>Ime, prezime i služba</Text>
              </View> 
              <View style={[styles.tableCol, { width: '50%' }]}> 
                <Text style={styles.tableCell}></Text>
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '20%'}]}> 
                <Text style={styles.tableCell}>MJESTO I DATUM</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '30%' }]}> 
                <Text style={styles.tableCell}>Krizme</Text>
              </View> 
              <View style={[styles.tableCol, { width: '50%' }]}> 
                <Text style={styles.tableCell}></Text>
              </View> 
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ChrismNotePdf;