import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles mimicking Tailwind
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#fef2f2", // light pinkish
  },
  borderBox: {
    border: "2 solid #d63384",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff0f6",
  },
  header: {
    fontSize: 18,
    color: "#b3005e",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  emblem: {
    width: 50,
    height: 50,
    marginBottom: 5,
    alignSelf: "center",
  },
  rsText: {
    fontSize: 24,
    textAlign: "center",
    color: "#880044",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    textAlign: "center",
    color: "#880044",
    marginBottom: 10,
  },
  watermarkedBox: {
    border: "1 solid #ff80aa",
    padding: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export const StampPaperPDF = ({ value = "₹100" }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.borderBox}>
        <Text style={styles.header}>India Non Judicial</Text>
        
        <Text style={styles.rsText}>{value}</Text>
        <Text style={styles.subText}>One Hundred Rupees</Text>

        <View style={styles.watermarkedBox}>
          <Text
            style={{
              fontSize: 10,
              color: "#aa3355",
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            This is a digitally generated representation of a ₹100 stamp paper.
            Not valid for legal use unless issued by authorized government vendors.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
