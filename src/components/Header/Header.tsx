import Image from "next/image"
import React from "react"
import Button from "../Button"
import Link from "next/link"
import { HEADER_NAVIGATION_ITEMS, PAGE_ROUTE } from "@/utils/constant"
import { usePathname } from "next/navigation"
import { cn } from "@/utils"

const Header = () => {
  const pathName = usePathname()

  return (
    <div
      className={cn("p-8", pathName === PAGE_ROUTE.HOMEPAGE ? "bg-white" : "")}
    >
      <div className="flex flex-row place-content-between">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>

        {/* Menu */}
        <div className="flex flex-row space-x-6 align-middle content-around text-sm font-semibold">
          {HEADER_NAVIGATION_ITEMS.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              className={cn(
                "content-around hover:text-primary text-black",
                pathName === href && "text-primary "
              )}
            >
              {label}
            </Link>
          ))}

          <div className="content-around align-middle hover:text-primary">
            <Link href={PAGE_ROUTE.SIGN_IN}>
              <Button label="Sign in" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
