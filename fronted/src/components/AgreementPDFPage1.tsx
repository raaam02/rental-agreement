import {
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

// Optional: Register custom font if needed
Font.register({
  family: 'Times-Roman',
  src: 'https://fonts.gstatic.com/s/timesnewroman/v9/SFNSDisplay-Regular.woff2',
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 400,
    paddingHorizontal: 60,
    fontFamily: 'Times-Roman',
    fontSize: 19,
    lineHeight: 1.6,
    color: '#000',
    position: 'relative',
    justifyContent: 'center',
    paddingLeft: 90,
    paddingRight: 40,
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: 30,
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  centerBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    width: '100%',
    fontSize: 10,
  },
});

export const AgreementPDFPage1 = ({ form, pageNumber }: { form: any, pageNumber: number }) => (
  <Page size="LEGAL" style={styles.page}>
    <Text style={styles.heading}>LEAVE AND LICENSE AGREEMENT</Text>

    <Text style={styles.paragraph}>
      ARTICLES OF AGREEMENT made and entered into at{' '}
      <Text style={styles.bold}>{form.place || 'NALLASOPARA'}</Text> this{' '}
      <Text style={styles.bold}>{form.startDate || '01st day of Oct 2023'}</Text> BETWEEN MR.{'\n\n'}
      <Text style={styles.bold}>{form.landlordName || 'HEERALAL KANARAM PRAJAPATI'}</Text>, residing at{' '}
      <Text style={styles.bold}>
        {form.landlordAddress ||
          'B-08, SAI DARSHAN CHAWL, ALKAPURI ROAD, NEAR J.B.S SCHOOL GATE, NALLASOPARA(EAST) TAL- VASAI, DIST-PALGHAR 401209'}
      </Text>{' '}
      Indian inhabitant/s (hereinafter called and referred to as “the LICENSOR/S” of the ONE PART.
    </Text>

    <Text style={styles.centerBold}>AND</Text>

    <Text style={styles.paragraph}>
      <Text style={styles.bold}>{form.tenantName || 'MRS. JYOTI MARSHAL FRANCIS'}</Text> residing at{' '}
      <Text style={styles.bold}>
        {form.tenantAddress ||
          'ROOM NO 1, OM SHIV SHAKTI, GORAI 1, BHIM NAGAR, NEAR MANGAL MURTI HOSPITAL, BORIVALI WEST, MUMBAI 400091'}
      </Text>{' '}
      Indian inhabitant, (hereinafter called and referred to as “the LICENSEE/S” of the OTHER PART.
    </Text>

    <Text style={styles.footer}>Page {pageNumber} of 7</Text>
  </Page>
);
