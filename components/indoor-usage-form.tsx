import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type IndoorUsageFormProps = {
  formData: any
  onUpdateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function IndoorUsageForm({ formData, onUpdateFormData, onNext, onBack }: IndoorUsageFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Indoor Water Usage</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bathroom Usage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="showerDuration">Average Shower Duration (Minutes)</Label>
                <Input
                  id="showerDuration"
                  type="number"
                  value={formData.showerDuration}
                  onChange={(e) => onUpdateFormData({ showerDuration: e.target.value })}
                  placeholder="Minutes per shower"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="showersPerDay">Showers Per Day (household)</Label>
                <Input
                  id="showersPerDay"
                  type="number"
                  value={formData.showersPerDay}
                  onChange={(e) => onUpdateFormData({ showersPerDay: e.target.value })}
                  placeholder="Number of showers"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kitchen Usage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dishwasherLoads">Dishwasher Loads Per Week</Label>
                <Input
                  id="dishwasherLoads"
                  type="number"
                  value={formData.dishwasherLoads}
                  onChange={(e) => onUpdateFormData({ dishwasherLoads: e.target.value })}
                  placeholder="Number of Loads"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dishWashingTime">Hand Washing Dishes (minutes/day)</Label>
                <Input
                  id="dishWashingTime"
                  type="number"
                  value={formData.dishWashingTime}
                  onChange={(e) => onUpdateFormData({ dishWashingTime: e.target.value })}
                  placeholder="Minutes per day"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Laundry Usage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="laundryLoads">Loads of Laundry Per Week</Label>
                <Input
                  id="laundryLoads"
                  type="number"
                  value={formData.laundryLoads}
                  onChange={(e) => onUpdateFormData({ laundryLoads: e.target.value })}
                  placeholder="Enter Number of Loads"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="washingMachineType">Washing Machine Type</Label>
                <Input
                  id="washingMachineType"
                  value={formData.washingMachineType}
                  onChange={(e) => onUpdateFormData({ washingMachineType: e.target.value })}
                  placeholder="Enter type"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Estimated Daily Indoor Usage</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm mb-1">Bathroom</p>
              <p className="text-blue-600 text-2xl font-bold">45 gal</p>
            </div>
            <div>
              <p className="text-sm mb-1">Kitchen</p>
              <p className="text-blue-600 text-2xl font-bold">30 gal</p>
            </div>
            <div>
              <p className="text-sm mb-1">Laundry</p>
              <p className="text-blue-600 text-2xl font-bold">25 gal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Next: Outdoor Usage</Button>
      </div>
    </form>
  )
}

