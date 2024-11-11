"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { PAGE_ROUTE } from "@/utils/constant"
import { usePathname } from "next/navigation"

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const pathname = usePathname()

  const isShowHeader = ![PAGE_ROUTE.SIGN_IN].includes(pathname as PAGE_ROUTE)
  const isShowFooter = ![PAGE_ROUTE.SIGN_IN].includes(pathname as PAGE_ROUTE)

  return (
    <div>
      {isShowHeader && <Header />}

      {children}

      {isShowFooter && <Footer />}
    </div>
  )
}
