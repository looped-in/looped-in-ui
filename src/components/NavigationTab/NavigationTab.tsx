"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import DashboardIcon from "@/icons/Dashboard.png"
import MilestonesIcon from "@/icons/Milestones.png"
import ProgressReports from "@/icons/ProgressReports.png"
import Quotes from "@/icons/Quotes.png"
import ViewLogs from "@/icons/ViewLogs.png"
import SignOut from "@/icons/SignOut.png"
import { usePathname } from "next/navigation"
import { cn } from "@/utils"
import { ADMIN_ROUTE, ICON_SIZE } from "@/utils/constant"

const NAVIGATION_TAB_ITEMS = [
  { label: "Dashboard", href: ADMIN_ROUTE.ADMIN, icon: DashboardIcon },
  { label: "Milestones", href: ADMIN_ROUTE.MILESTONES, icon: MilestonesIcon },
  {
    label: "Progress Reports",
    href: ADMIN_ROUTE.PROGRESS_REPORTS,
    icon: ProgressReports,
  },
  { label: "Defects", href: ADMIN_ROUTE.DEFECTS, icon: Quotes },
  { label: "Project Images", href: ADMIN_ROUTE.PROJECT_IMAGES, icon: ViewLogs },
]

const NavigationTab = () => {
  const router = usePathname()

  return (
    <div className="bg-[#2E2A30] h-screen p-6 pt-9 place-content-between flex flex-col">
      <div className="space-y-10">
        <div className="w-full flex justify-center">
          <Link href="/">
            <Image src="/logo-white.svg" alt="logo" width={150} height={150} />
          </Link>
        </div>

        <div className="text-white space-y-8 pl-3">
          <div>56 Jasmine St Bondi</div>
        </div>

        <div className="flex flex-col space-y-4">
          {NAVIGATION_TAB_ITEMS.map(({ label, href, icon }) => {
            const isCurrentRoute = router === href

            return (
              <Link
                href={href}
                key={href}
                className={cn(
                  "flex flex-row space-x-3",
                  isCurrentRoute
                    ? "bg-slate-100 rounded-md px-3 py-2 bg-gradient-to-b from-[#ffb945] to-[#ff7338] font-semibold"
                    : "pl-3"
                )}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={ICON_SIZE.MEDIUM}
                  height={ICON_SIZE.MEDIUM}
                />
                <div className="text-white">{label}</div>
              </Link>
            )
          })}
        </div>
      </div>
      <div>
        <Link href="/" className="text-white flex-row flex space-x-2 pl-3">
          <Image
            src={SignOut}
            alt="logout"
            width={ICON_SIZE.MEDIUM}
            height={ICON_SIZE.MEDIUM}
          />
          <div>Sign out</div>
        </Link>
      </div>
    </div>
  )
}

export default NavigationTab
