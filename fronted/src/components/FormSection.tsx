import type { FormData } from "@/Types/form"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export const FormSection = ({ form, onChange, }: {
  form: FormData
  onChange: (key: keyof FormData, value: string) => void
}) => {
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