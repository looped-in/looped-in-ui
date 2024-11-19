"use server"

import { ADMIN_ROUTE } from "@/utils/constant"
import { redirect } from "next/navigation"
import type { signInFormData } from "./form-schema"

export async function signIn(formData: signInFormData) {
  redirect(ADMIN_ROUTE.ADMIN)
}
