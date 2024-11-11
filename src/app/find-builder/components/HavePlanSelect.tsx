import {
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui"
import { useFormContext } from "react-hook-form"

export const HavePlansSelect = () => {
  const form = useFormContext()

  const planOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "not-required", label: "Not required" },
  ]

  return (
    <div className="flex flex-row justify-between">
      <div className="">Do you have plans</div>
      <div className="flex flex-row w-1/2 justify-between">
        {planOptions.map((option) => (
          <FormField
            key={option.value}
            control={form.control}
            name="havePlans"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row gap-2 space-y-0 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value === option.value}
                      onCheckedChange={field.onChange}
                      value={option.value}
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-md">
                    {option.label}
                  </FormLabel>
                </FormItem>
              )
            }}
          />
        ))}
      </div>
    </div>
  )
}
