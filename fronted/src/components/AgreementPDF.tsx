import { Document } from '@react-pdf/renderer'
import { AgreementPDFPage1 } from './AgreementPDFPage1'

export const AgreementPDF = ({ form }: { form: any }) => (
  <Document>
    <AgreementPDFPage1 form={form} pageNumber={1} />
    {/* Next pages to be added here */}
  </Document>
);
