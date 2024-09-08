"use server"

import { redirect } from "next/navigation"

export async function redirectButton() {
  redirect("/sign-in")
}
