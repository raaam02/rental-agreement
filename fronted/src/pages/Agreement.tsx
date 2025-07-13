import { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import type { FormData } from '@/Types/form'
import { AgreementPDF } from '@/components/AgreementPDF'
import { pdf } from '@react-pdf/renderer'
import { FormSection } from '@/components/FormSection'
import PDFViewer from '@/components/PDFViewer'

export function Agreement() {
  const [form, setForm] = useState<FormData>({
    startDate: '',
    endDate: '',
    landlordName: '',
    landlordAddress: '',
    tenantName: '',
    tenantAddress: '',
    propertyDetails: '',
    rent: '',
    deposit: '',
  })

  const [viewMode, setViewMode] = useState<'form' | 'preview' | 'both'>('both')
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)

const generatePDF = async () => {
  if (blobUrl) {
    URL.revokeObjectURL(blobUrl)
    setBlobUrl(null)
  }

  const blob = await pdf(<AgreementPDF form={form} />).toBlob()
  const url = URL.createObjectURL(blob)
  setBlobUrl(url)
}

useEffect(() => {
  generatePDF()
  // No need to revoke here; revoke when generating a new one
}, [form])


  const handleChange = (key: keyof FormData, value: string) => {
    setForm({ ...form, [key]: value })
  }

  const downloadPDF = () => {
    if (!blobUrl) return
    const a = document.createElement('a')
    a.href = blobUrl
    a.download = 'RentalAgreement.pdf'
    a.click()
  }

  return (
    <div className="space-y-4 pt-5 sm:px-16">
      <div className='mb-4 flex justify-center pb-5'>
        <ToggleGroup type="single" value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="mb-4 border">
          <ToggleGroupItem value="form">Form</ToggleGroupItem>
          <ToggleGroupItem className='px-4' value="preview">Preview</ToggleGroupItem>
          <ToggleGroupItem className='hidden sm:block' value="both">Both</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {viewMode === 'form' && (
        <div className='border rounded-lg max-w-3xl overflow-hidden m-auto'>
          <FormSection form={form} onChange={handleChange} />
        </div>
      )}

      {viewMode === 'preview' && (
        <PDFViewer
          blobUrl={blobUrl}
          zoom={zoom}
          onZoomIn={() => setZoom(zoom + 0.1)}
          onZoomOut={() => setZoom(Math.max(0.5, zoom - 0.1))}
          onDownload={downloadPDF}
        />
      )}

      {viewMode === 'both' && (
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-0">
          <div className='border rounded-lg sm:rounded-l-lg sm:rounded-r-none overflow-hidden'>
            <FormSection form={form} onChange={handleChange} />
          </div>
          <PDFViewer
            blobUrl={blobUrl}
            zoom={zoom}
            onZoomIn={() => setZoom(zoom + 0.1)}
            onZoomOut={() => setZoom(Math.max(0.5, zoom - 0.1))}
            onDownload={downloadPDF}
          />
        </div>
      )}
    </div>
  )
}