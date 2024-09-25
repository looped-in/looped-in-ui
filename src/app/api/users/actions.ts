"use server"

import { PAGE_ROUTE } from "@/utils/constant"
import { redirect } from "next/navigation"
import type { signInFormData } from "./form-schema"

export async function signIn(formData: signInFormData) {
  redirect(PAGE_ROUTE.DASHBOARD)
}
