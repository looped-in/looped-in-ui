import Image from "next/image"
import React from "react"
import Button from "../Button"
import Link from "next/link"
import { HEADER_LINKS, PAGE_ROUTE } from "@/utils/constant"
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
          {HEADER_LINKS.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              className={cn(
                "content-around hover:text-[#ff7338] text-black",
                pathName === href && "text-[#ff7338] "
              )}
            >
              {label}
            </Link>
          ))}

          <div className="content-around align-middle hover:text-[#ff7338]">
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
