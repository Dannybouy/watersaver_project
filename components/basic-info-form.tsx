import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type BasicInfoFormProps = {
  formData: any
  onUpdateFormData: (data: any) => void
  onNext: () => void
}

export function BasicInfoForm({ formData, onUpdateFormData, onNext }: BasicInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="state">State/Region</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => onUpdateFormData({ state: e.target.value })}
              placeholder="Enter State"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => onUpdateFormData({ city: e.target.value })}
              placeholder="Enter City"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Usage Patterns</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="occupants">Occupants</Label>
            <Input
              id="occupants"
              type="number"
              value={formData.occupants}
              onChange={(e) => onUpdateFormData({ occupants: e.target.value })}
              placeholder="Number of people"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hoursAtHome">Average Daily Hours at Home</Label>
            <Input
              id="hoursAtHome"
              type="number"
              value={formData.hoursAtHome}
              onChange={(e) => onUpdateFormData({ hoursAtHome: e.target.value })}
              placeholder="Hours per day"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Current Water Usage</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="monthlyBill">Average Monthly Bill ($)</Label>
            <Input
              id="monthlyBill"
              type="number"
              value={formData.monthlyBill}
              onChange={(e) => onUpdateFormData({ monthlyBill: e.target.value })}
              placeholder="Enter Monthly Amount"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="waterProvider">Water Provider</Label>
            <Input
              id="waterProvider"
              value={formData.waterProvider}
              onChange={(e) => onUpdateFormData({ waterProvider: e.target.value })}
              placeholder="Enter provider name"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h4 className="font-semibold mb-2">Pro Tip</h4>
        <p className="text-sm text-gray-700">
          More detailed information helps us provide more accurate savings recommendations. Make sure to have your
          recent water bills handy for the best results.
        </p>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next: Indoor Usage</Button>
      </div>
    </form>
  )
}

