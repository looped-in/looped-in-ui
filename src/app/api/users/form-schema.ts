import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean(),
})

export type signInFormData = z.infer<typeof signInSchema>
