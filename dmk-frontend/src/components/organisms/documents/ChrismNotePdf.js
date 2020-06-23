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
    padding: '5px 6px',
    fontSize: 10,
    borderStyle: "solid",
    borderBottom: 1 
  }
});


const ChrismNotePdf = ({chrisms}) =>{
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
              <View style={[styles.tableCol, { width: '19%', paddingTop:'36px'}]}> 
                <Text style={styles.tableCell}>KRIZMANIK</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '28%' }]}> 
                <Text style={styles.tableCell}>Ime i prezime</Text>
                <Text style={styles.tableCell}>Mjesto i datum rođenja</Text> 
                <Text style={styles.tableCell}>Župa i datum krštenja</Text> 
                <Text style={styles.tableCell}>Mjesto stanovanja</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '53%' }]}> 
                <Text style={styles.tableCell}>{chrisms.person && `${chrisms.person.first_name} ${chrisms.person.last_name}`}</Text>
                <Text style={styles.tableCell}>{chrisms.person && chrisms.birth_place && `${chrisms.person.last_name}, ${formatLocalDate(chrisms.person.birth_date)}`}</Text> 
                <Text style={styles.tableCell}>{chrisms.baptism_district && chrisms.document_baptism && `${chrisms.baptism_district.name}, ${chrisms.document_baptism.act_date}`}</Text> 
                <Text style={styles.tableCell}>{(chrisms.person && chrisms.person.domicile) || '-'}</Text>  
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '19%', paddingTop:'12px'}]}> 
                <Text style={styles.tableCell}>RODITELJI</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '28%' }]}> 
                <Text style={styles.tableCell}>Ime oca</Text>
                <Text style={styles.tableCell}>Ime i djevojačko prezime majke</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '53%' }]}> 
                <Text style={styles.tableCell}>{chrisms.father && `${chrisms.father.first_name} ${chrisms.father.last_name}` || '-'}</Text>
                <Text style={styles.tableCell}>{chrisms.mother && `${chrisms.mother.first_name} ${chrisms.mother.maiden_name}` || '-'}</Text> 
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '19%'}]}> 
                <Text style={styles.tableCell}>KUM/A</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '28%' }]}> 
                <Text style={styles.tableCell}>Ime i prezime, njihova župa</Text>
              </View> 
              <View style={[styles.tableCol, { width: '53%' }]}> 
                <Text style={styles.tableCell}>{chrisms.best_man && chrisms.best_man_district && `${chrisms.best_man.first_name} ${chrisms.best_man.last_name}, ${chrisms.best_man_district.name}` || '-'}</Text>
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '19%'}]}> 
                <Text style={styles.tableCell}>DJELITELJ KRIZME</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '28%' }]}> 
                <Text style={styles.tableCell}>Ime, prezime i služba</Text>
              </View> 
              <View style={[styles.tableCol, { width: '53%' }]}> 
                <Text style={styles.tableCell}>{chrisms.act_performed && `${chrisms.act_performed.title} ${chrisms.act_performed.first_name} ${chrisms.act_performed.last_name}` || '-'}</Text>
              </View> 
            </View>

            <View style={styles.tableRow}> 
              <View style={[styles.tableCol, { width: '19%'}]}> 
                <Text style={styles.tableCell}>MJESTO I DATUM</Text> 
              </View> 
              <View style={[styles.tableCol, { width: '28%' }]}> 
                <Text style={styles.tableCell}>Krizme</Text>
              </View> 
              <View style={[styles.tableCol, { width: '53%' }]}> 
                <Text style={styles.tableCell}>{chrisms.document_chrism && chrisms.chrism_district && `${chrisms.chrism_district.name} ${formatLocalDate(chrisms.document_chrism.act_date)}` || '-'}</Text>
              </View> 
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ChrismNotePdf;