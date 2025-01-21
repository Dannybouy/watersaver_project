import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type OutdoorUsageFormProps = {
  formData: any
  onUpdateFormData: (data: any) => void
  onBack: () => void
}

export function OutdoorUsageForm({ formData, onUpdateFormData, onBack }: OutdoorUsageFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Outdoor Water Usage</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lawn & Garden</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lawnSize">Lawn Size (sq ft)</Label>
                <Input
                  id="lawnSize"
                  type="number"
                  value={formData.lawnSize}
                  onChange={(e) => onUpdateFormData({ lawnSize: e.target.value })}
                  placeholder="Enter square feet"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gardenSize">Garden Size (sq ft)</Label>
                <Input
                  id="gardenSize"
                  type="number"
                  value={formData.gardenSize}
                  onChange={(e) => onUpdateFormData({ gardenSize: e.target.value })}
                  placeholder="Enter square feet"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wateringFrequency">Watering Frequency</Label>
                <Input
                  id="wateringFrequency"
                  value={formData.wateringFrequency}
                  onChange={(e) => onUpdateFormData({ wateringFrequency: e.target.value })}
                  placeholder="Enter Frequency"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="irrigationType">Irrigation System Type</Label>
                <Input
                  id="irrigationType"
                  value={formData.irrigationType}
                  onChange={(e) => onUpdateFormData({ irrigationType: e.target.value })}
                  placeholder="Enter type"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="poolType">Swimming Pool</Label>
                <Input
                  id="poolType"
                  value={formData.poolType}
                  onChange={(e) => onUpdateFormData({ poolType: e.target.value })}
                  placeholder="Enter pool type"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="poolSize">Pool Size (If applicable)</Label>
                <Input
                  id="poolSize"
                  value={formData.poolSize}
                  onChange={(e) => onUpdateFormData({ poolSize: e.target.value })}
                  placeholder="Gallons"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carWashingFrequency">Car Washing Frequency</Label>
                <Input
                  id="carWashingFrequency"
                  value={formData.carWashingFrequency}
                  onChange={(e) => onUpdateFormData({ carWashingFrequency: e.target.value })}
                  placeholder="Enter Frequency"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Estimated Daily Outdoor Usage</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm mb-1">Lawn & Garden</p>
              <p className="text-blue-600 text-2xl font-bold">75 gal</p>
            </div>
            <div>
              <p className="text-sm mb-1">Pool & Features</p>
              <p className="text-blue-600 text-2xl font-bold">20 gal</p>
            </div>
            <div>
              <p className="text-sm mb-1">Other Usage</p>
              <p className="text-blue-600 text-2xl font-bold">10 gal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          View Results
        </Button>
      </div>
    </form>
  )
}

