"use client"
import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "@/app/api/users/actions"
import { PAGE_ROUTE } from "@/utils/constant"
import { ArrowLeft } from "lucide-react"
import {
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Checkbox,
} from "@/components/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type signInFormData, signInSchema } from "@/app/api/users/form-schema"
import { useState } from "react"

const UpdatePassword = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<signInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })
  const handleBack = () => {
    router.back()
  }

  const handleForgotPassword = () => {
    router.push(PAGE_ROUTE.HOMEPAGE)
  }

  const handleSubmit = async (data: signInFormData) => {
    try {
      setLoading(true)
      await signIn(data).then(() => {
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      form.setError("root", { message: "Invalid email or password" })
    }
  }

  return (
    <div className="flex h-screen flex-row overflow-hidden">
      {/* Left of screen: sign in data */}
      <div className="flex w-1/2 flex-col place-content-center items-center gap-3 p-10 pt-20">
        {/* logo */}
        <div>
          <Link href={PAGE_ROUTE.HOMEPAGE}>
            <Image src="/logo.svg" alt="logo" width={150} height={150} />
          </Link>
        </div>

        {/* Sign in form */}
        <div className="flex flex-col gap-5">
          <div
            onClick={handleBack}
            className="flex cursor-pointer flex-row items-center gap-2"
          >
            <ArrowLeft />
            <div>Back</div>
          </div>

          <div className="text-center text-6xl">Welcome back!</div>

          <div className="font-normal">
            Welcome back to Loopedin. Enter your details below to sign in.
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              onChange={() => console.log("first")}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          autoFocus
                          className="h-12"
                          placeholder="Email Address"
                          type="email"
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
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          className="h-12"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />

              <div className="flex flex-row place-content-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-row gap-2 space-y-0 items-center">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-md">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />

                <div onClick={handleForgotPassword} className="cursor-pointer">
                  Forgot Password?
                </div>
              </div>

              <Button
                type="submit"
                label="Sign In"
                className="w-full text-xs"
                disabled={loading}
              />
            </form>
          </Form>
        </div>
      </div>

      {/* Right furniture image */}
      <div className="w-1/2 place-content-center">
        <Image
          src="/sign-in.png"
          width={1000}
          height={1000}
          alt="signInImage"
        />
      </div>
    </div>
  )
}

export default UpdatePassword
