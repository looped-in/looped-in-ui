import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

const StepOne = () => {
  return (
    <div className="flex flex-row py-24 pl-28 gap-40">
      <div className="w-1/2 space-y-6 p-4 place-content-center">
        <Button label="Step 1" />
        <div className="text-2xl font-semibold">Step One of The Process</div>

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
        <div className="bg-gradient-radial from-[#ffb945] to-[#ff7338] absolute w-full h-full rounded-full opacity-20 blur-3xl z-0" />
        <div className="flex">
          <Image
            className="z-10"
            src="/step-1.png"
            width={1000}
            height={1000}
            alt="step-1"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default StepOne
