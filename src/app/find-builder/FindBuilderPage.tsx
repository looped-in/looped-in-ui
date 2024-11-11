"use client"

import Image from "next/image"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type findBuilderFormData, findBuilderSchema } from "./form-schema"
import {
  FormControl,
  FormField,
  FormItem,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  FormMessage,
} from "@/components/ui"
import { MapPin, Search } from "lucide-react"
import { useCallback, useState } from "react"
import Button from "@/components/Button"
import { AdvancedSearchForm } from "./components/AdvancedSearchForm"
import { findBuilder } from "./action"
import { HavePlansSelect } from "./components/HavePlanSelect"

export default function FindBuilderPage() {
  const [isShowAdvancedFilter, setIsShowAdvancedFilter] = useState(false)
  const [builders, setBuilders] = useState<null | []>()

  const form = useForm<findBuilderFormData>({
    resolver: zodResolver(findBuilderSchema),
    defaultValues: {
      searchText: "",
      location: "",
      budget: [50000],
      havePlans: "no",
    },
  })
  // const formData = form.getValues()
  // form.formState.errors
  // console.log(">>>> ~ FindBuilderPage ~ formData:", formData)

  const onSubmit = (data: findBuilderFormData) => {
    handleSearch(data)
  }

  const handleSearch = useCallback(async (formData: findBuilderFormData) => {
    const data = await findBuilder(formData.searchText)
    setBuilders(data.users)
  }, [])
  return (
    <div className="flex justify-center ">
      <Image
        src="/find-a-builder.png"
        fill
        alt="header"
        className="flex absolute left-0 top-0 -z-10 object-cover w-full"
      />

      <div className="my-12 w-3/4 xl:w-1/2 bg-white rounded-3xl">
        {/* Badget */}
        <div className="flex flex-col gap-5 px-12 py-20">
          <div className="text-3xl font-semibold">Find a Builder</div>

          <div>
            <FormProvider {...form}>
              <div className="flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="searchText"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            onClickIcon={form.handleSubmit(onSubmit)}
                            endIcon={Search}
                            type="text"
                            fillIcon
                            autoFocus
                            placeholder="Search with keyword"
                            className="h-16"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => {
                      return (
                        <FormItem className="w-1/2">
                          <FormControl>
                            <Input
                              endIcon={MapPin}
                              type="text"
                              autoFocus
                              placeholder="Location"
                              className="h-16"
                              required={false}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => {
                      return (
                        <FormItem className="w-1/2">
                          <Select name="service">
                            <FormControl>
                              <SelectTrigger className="h-16">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <FormMessage />

                            <SelectContent>
                              <SelectItem value="building">Building</SelectItem>
                              <SelectItem value="fix">Fix</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )
                    }}
                  />
                </div>

                {/* Advanced Filter */}
                {isShowAdvancedFilter && <AdvancedSearchForm />}

                <HavePlansSelect />
                <div
                  className="flex justify-end items-center gap-2 cursor-pointer group"
                  onClick={() => setIsShowAdvancedFilter(!isShowAdvancedFilter)}
                >
                  <div className="text-lg font-medium">
                    {!isShowAdvancedFilter
                      ? "Advanced Filter"
                      : "Minimized Filter"}
                  </div>
                </div>

                {/* End of Advanced filter */}
                {isShowAdvancedFilter && (
                  <div className="flex w-full justify-center">
                    <Button
                      type="submit"
                      label="Search"
                      className="w-1/2 h-12"
                      onClick={form.handleSubmit(onSubmit)}
                    />
                  </div>
                )}
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
