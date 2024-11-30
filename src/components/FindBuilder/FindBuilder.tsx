import Image from "next/image"
import React from "react"
import Button from "../Button"
import { PAGE_ROUTE } from "@/utils/constant"
import Link from "next/link"

const FindBuilder = () => {
  return (
    <div className=" flex flex-row h-3/6">
      <div className="w-3/6">
        <Image
          src="/find-builder.png"
          alt="find-builder"
          height={1500}
          width={1500}
        />
      </div>

      <div className="w-3/6 bg-zinc-800 content-around p-8 space-y-6">
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary text-4xl font-semibold">
          Find a builder for <br />
          your next job!
        </div>

        <div className="text-slate-50 text-sm ">
          Building or renovating? Let Loopedin help you find the right builder
          for your next big project. Browse to find your builder!
        </div>

        <div>
          <Link href={PAGE_ROUTE.FIND_BUILDER}>
            <Button label="Find a Builder" className="w-1/2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FindBuilder