"use server"
import { PAGE_ROUTE } from "@/utils/constant"
import { redirect } from "next/navigation"

export async function redirectButton() {
  redirect(PAGE_ROUTE.SIGN_IN)
}
