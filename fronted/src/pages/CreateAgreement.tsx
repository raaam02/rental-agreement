import { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const CreateAgreement = () => {
  const [form, setForm] = useState({
    landlord: "",
    tenant: "",
    address: "",
    rent: "",
    duration: "",
  })

  const componentRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Rental_Agreement",
  })

  return (
    <section className="max-w-3xl mx-auto py-10 space-y-10">
      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Create Rental Agreement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Landlord Name", name: "landlord" },
            { label: "Tenant Name", name: "tenant" },
            { label: "Property Address", name: "address" },
            { label: "Monthly Rent (INR)", name: "rent" },
            { label: "Duration (Months)", name: "duration" },
          ].map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                value={(form as any)[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Preview + Download */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Preview</h2>
          <Button onClick={handlePrint}>Download as PDF</Button>
        </div>

        {/* 👇 This must be always mounted */}
        <div
          ref={componentRef}
          className="p-6 border rounded-md bg-muted text-sm leading-6"
        >
          <h3 className="text-xl font-bold text-center mb-4">Rental Agreement</h3>
          <p>
            This Rental Agreement is made between <strong>{form.landlord || "________"}</strong> (Landlord)
            and <strong>{form.tenant || "________"}</strong> (Tenant).
          </p>
          <p>
            The property located at <strong>{form.address || "________"}</strong> shall be rented for a monthly
            rent of <strong>₹{form.rent || "____"}</strong>, for a duration of{" "}
            <strong>{form.duration || "____"}</strong> months.
          </p>
          <p>
            Both parties agree to abide by the terms and conditions as discussed and mutually accepted.
          </p>
          <p className="mt-6">
            <strong>Landlord Signature: __________</strong>
          </p>
          <p>
            <strong>Tenant Signature: __________</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CreateAgreement
