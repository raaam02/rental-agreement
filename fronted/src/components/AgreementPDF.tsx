import { Document } from '@react-pdf/renderer'
import { AgreementPDFPage1 } from './AgreementPDFPage1'
import { createTw } from 'react-pdf-tailwind'
import { StampPaperPDF } from './StampPaperPDF';

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

export const AgreementPDF = ({ form }: { form: any }) => (
  <Document>
    <StampPaperPDF value="₹100" />
    <AgreementPDFPage1 form={form} pageNumber={1} tw={tw} />
    {/* Next pages to be added here */}
  </Document>
);
