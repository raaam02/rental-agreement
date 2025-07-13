import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "./ui/button"
import { Download } from "lucide-react"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

export default function PDFViewer({
  blobUrl,
  zoom,
  onZoomIn,
  onZoomOut,
  onDownload,
}: {
  blobUrl: string | null
  zoom: number
  onZoomIn: () => void
  onZoomOut: () => void
  onDownload: () => void
}) {
  const [numPages, setNumPages] = useState<number | null>(null)

  return (
    <div className="relative border rounded-lg p-2">
      <div className="flex justify-between items-center mb-3">
        <div className="space-x-2">
          <button className="btn" onClick={onZoomOut}>−</button>
          <button className="btn" onClick={onZoomIn}>+</button>
        </div>
        <Button onClick={onDownload}><Download/>Download</Button>
      </div>

      {blobUrl ? (
        <div className="overflow-auto max-h-[85vh]">
          <Document
            file={blobUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading="Loading PDF..."
          >
            {numPages && Array.from(new Array(numPages), (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                scale={zoom}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>
      ) : (
        <p>Generating PDF...</p>
      )}
    </div>
  )
}