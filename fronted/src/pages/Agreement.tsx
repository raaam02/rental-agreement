import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { PDFViewer } from '@react-pdf/renderer'
import type { FormData } from '@/Types/form'
import { AgreementPDF } from '@/components/AgreementPDF'

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

  const handleChange = (key: keyof FormData, value: string) => {
    setForm({ ...form, [key]: value })
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
        <div className="border rounded-lg p-2 h-[90vh]">
          <PDFViewer width="100%" height="100%">
            <AgreementPDF form={form} />
          </PDFViewer>
        </div>
      )}
      {viewMode === 'both' && (
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-0">
          <div className='border rounded-lg sm:rounded-l-lg sm:rounded-r-none overflow-hidden'>
            <FormSection form={form} onChange={handleChange} />
          </div>
          <div className="border sm:border-l-0 rounded-lg sm:rounded-r-lg sm:rounded-l-none p-2">
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
    <div className='mx-auto overflow-hidden'>
      <div className='pb-10 p-6 bg-accent text-2xl font-bold border-b'>
        <h2>Rental Agreement Form</h2>
        <p className='text-xs font-normal text-muted-foreground'>Build your agreement in minutes</p>
      </div>
      <div className="flex flex-col gap-4 space-y-2 p-4 pt-10 sm:p-12">
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
    </div>
  )
}
