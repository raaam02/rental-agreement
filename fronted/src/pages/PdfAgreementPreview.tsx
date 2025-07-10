import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { PDFViewer } from '@react-pdf/renderer'
import type { FormData } from '@/Types/form'
import { AgreementPDF } from '@/components/AgreementPDF'

export function RentalAgreementForm() {
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

  const handleChange = (key: keyof FormData, value: string) => {
    setForm({ ...form, [key]: value })
  }

  return (
    <div className="space-y-4">
      <ToggleGroup type="single" value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="mb-4">
        <ToggleGroupItem value="form">Form Only</ToggleGroupItem>
        <ToggleGroupItem value="preview">Preview Only</ToggleGroupItem>
        <ToggleGroupItem value="both">Side by Side</ToggleGroupItem>
      </ToggleGroup>

      {viewMode === 'form' && <FormSection form={form} onChange={handleChange} />}
      {viewMode === 'preview' && (
        <div className="border rounded p-2 h-[90vh]">
          <PDFViewer width="100%" height="100%">
            <AgreementPDF form={form} />
          </PDFViewer>
        </div>
      )}
      {viewMode === 'both' && (
        <div className="grid grid-cols-2 gap-4">
          <FormSection form={form} onChange={handleChange} />
          <div className="border rounded p-2 h-[90vh]">
            <PDFViewer width="100%" height="100%">
              <AgreementPDF form={form} />
            </PDFViewer>
          </div>
        </div>
      )}
    </div>
  )
}

function FormSection({
  form,
  onChange,
}: {
  form: FormData
  onChange: (key: keyof FormData, value: string) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Start Date</Label>
        <Input type="date" value={form.startDate} onChange={(e) => onChange('startDate', e.target.value)} />
      </div>
      <div>
        <Label>End Date</Label>
        <Input type="date" value={form.endDate} onChange={(e) => onChange('endDate', e.target.value)} />
      </div>
      <div>
        <Label>Landlord Name</Label>
        <Input value={form.landlordName} onChange={(e) => onChange('landlordName', e.target.value)} />
      </div>
      <div>
        <Label>Landlord Address</Label>
        <Input value={form.landlordAddress} onChange={(e) => onChange('landlordAddress', e.target.value)} />
      </div>
      <div>
        <Label>Tenant Name</Label>
        <Input value={form.tenantName} onChange={(e) => onChange('tenantName', e.target.value)} />
      </div>
      <div>
        <Label>Tenant Address</Label>
        <Input value={form.tenantAddress} onChange={(e) => onChange('tenantAddress', e.target.value)} />
      </div>
      <div>
        <Label>Property Details</Label>
        <Input value={form.propertyDetails} onChange={(e) => onChange('propertyDetails', e.target.value)} />
      </div>
      <div>
        <Label>Monthly Rent (Rs.)</Label>
        <Input value={form.rent} onChange={(e) => onChange('rent', e.target.value)} />
      </div>
      <div>
        <Label>Security Deposit (Rs.)</Label>
        <Input value={form.deposit} onChange={(e) => onChange('deposit', e.target.value)} />
      </div>
    </div>
  )
}
