import {
  FormControl,
  FormField,
  FormItem,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
} from "@/components/ui"
import { currencyFormatter } from "@/utils"
import { Bath, BedDouble, Building2 } from "lucide-react"
import { useFormContext } from "react-hook-form"

export const AdvancedSearchForm = () => {
  const form = useFormContext()
  const budgetForm = form.watch("budget")

  return (
    <div className="animate-in slide-in-from-top flex flex-col gap-5">
      <div className="flex flex-row gap-5">
        <FormField
          name="budget"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <div>Budget:</div>
                  <div>{currencyFormatter(Number(budgetForm?.[0])! ?? 0)}</div>
                </div>

                <Slider
                  className="w-full"
                  min={0}
                  max={100000}
                  step={1000}
                  name="Budget"
                  onValueChange={(value) => {
                    form.setValue("budget", value)
                  }}
                  defaultValue={field.value}
                />
              </FormItem>
            )
          }}
        />

        <FormField
          name="landStatus"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    type="text"
                    className="h-16"
                    placeholder="Land Status"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
      </div>

      <div className="flex flex-row gap-5">
        <FormField
          name="bedrooms"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input
                    endIcon={BedDouble}
                    type="text"
                    className="h-16"
                    placeholder="Bedrooms"
                    {...field}
                  ></Input>
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          name="bathrooms"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input
                    endIcon={Bath}
                    type="text"
                    className="h-16"
                    placeholder="Bathrooms"
                    {...field}
                  ></Input>
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          name="levels"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input
                    endIcon={Building2}
                    type="text"
                    className="h-16"
                    placeholder="Levels"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
      </div>

      <div className="flex flex-row gap-5">
        <FormField
          name="jobStatus"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    type="text"
                    className="h-16"
                    placeholder="Job Status"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          name="councilApproval"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-1/2">
                <FormControl>
                  {/* <Input
                    type="text"
                    className="h-16"
                    placeholder="Council Approval"
                    {...field}
                  /> */}

                  <Select name="service">
                    <FormControl>
                      <SelectTrigger className="h-16">
                        <SelectValue placeholder="Council Approval" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )
          }}
        />
      </div>
    </div>
  )
}
