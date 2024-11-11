import { z } from "zod"

enum LAND_STATUS {
  Ready = "Ready",
  NotReady = "Not Ready",
}

export const findBuilderSchema = z.object({
  searchText: z.string().min(1, { message: "Search text is required" }),
  location: z.string().optional(),
  service: z.string().optional(),
  budget: z.array(z.number()).optional(),
  landStatus: z.nativeEnum(LAND_STATUS).optional(),
  bedrooms: z.number().optional(),
  bathrooms: z.number().optional(),
  levels: z.number().optional(),
  jobStatus: z.string().optional(),
  councilApproval: z.string().optional(),
  havePlans: z.string().optional(),
})

export type findBuilderFormData = z.infer<typeof findBuilderSchema>
