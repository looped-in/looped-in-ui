import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

const StepThree = () => {
  return (
    <div className="flex flex-row py-24 pl-28 gap-40">
      <div className="w-1/2 space-y-6 p-8 place-content-center">
        <Button label="Step 1" />
        <div className="text-2xl font-semibold">Step Three of The Process</div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus morbi
          est porttitor velit, sit bibendum vitae blandit. Viverra orci ornare
          vehicula mauris purus pulvinar diam, vel. Odio pharetra mauris metus
          scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Luctus morbi est porttitor velit, sit bibendum vitae blandit. Viverra
          orci ornare vehicula mauris purus pulvinar diam, vel. Odio pharetra
          mauris metus scelerisque.
        </div>
      </div>

      <div className="w-1/2 relative">
        <div className="bg-gradient-radial from-secondary to-primary absolute w-full h-full right-0 bottom-0 rounded-full opacity-20 blur-3xl" />
        <div className="flex">
          <div className="z-10">
            <Image src="/step-3.1.png" width={317} height={597} alt="step-3" />
          </div>
          <div className="absolute left-40 top-60 z-10">
            <Image
              src="/top-banner-financials.png"
              width={317}
              height={597}
              alt="step-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
