import React from "react"
import Button from "../Button"
import Image from "next/image"
import Link from "next/link"
import { PAGE_ROUTE } from "@/utils/constant"
import { Search } from "lucide-react"

const TopBannerHomepage = () => {
  return (
    <div className=" relative flex flex-row px-28 pb-28 space-x-4">
      <div className="bg-gradient-to-tl from-[#ffb945] to-[#ff7338] absolute bottom-0 right-0 w-1/2 h-full rounded-full opacity-30 blur-3xl"></div>
      <div className="w-1/2 space-y-6 flex flex-col justify-center z-10">
        <div className="text-4xl font-medium">
          {"Collaboration tools you'll love for the jobs you don't."}
        </div>

        <div className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus morbi
          est porttitor velit, sit bibendum vitae blandit. Viverra orci ornare
          vehicula mauris purus pulvinar diam, vel. Odio pharetra mauris metus
          scelerisque.
        </div>

        <div className="text-sm flex flex-row justify-between">
          <Link href={PAGE_ROUTE.SIGN_IN} className="w-1/3">
            <Button label="Sign in" />
          </Link>
          <div className="text-center w-1/2 content-around font-bold">
            <Link
              href={PAGE_ROUTE.FIND_BUILDER}
              className="flex flex-row align-bottom gap-2"
            >
              <Search size={16} />
              <div>Find a Builder</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-7 z-10">
        <div className="">
          <Image
            src="/top-banner-milestones.png"
            width={359}
            height={273}
            alt="milestones"
            className="rounded-xl"
          />
        </div>
        <div className="flex-row flex justify-start gap-7 ">
          <div className="w-1/2">
            <Image
              src="/top-banner-updates.png"
              width={274}
              height={286}
              alt="updates"
              className="rounded-xl"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/top-banner-financials.png"
              width={300}
              height={228}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="financials"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBannerHomepage
