"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ADMIN_ROUTE, PAGE_ROUTE } from "@/utils/constant"
import { usePathname } from "next/navigation"

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const pathname = usePathname()

  const isShowHeader =
    ![
      PAGE_ROUTE.SIGN_IN,
      PAGE_ROUTE.FORGOT_PASSWORD,
      PAGE_ROUTE.UPDATE_PASSWORD,
    ].includes(pathname as PAGE_ROUTE) &&
    !Object.keys(ADMIN_ROUTE).includes(pathname as ADMIN_ROUTE)

  const isShowFooter = ![PAGE_ROUTE.SIGN_IN].includes(pathname as PAGE_ROUTE)

  return (
    <div id="default-layout" className="h-screen">
      {isShowHeader && <Header />}
      {children}
      {isShowFooter && <Footer />}
    </div>
  )
}
