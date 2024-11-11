import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

const StepTwo = () => {
  return (
    <div className="flex flex-row py-24 pl-28 gap-40">
      <div className="w-1/2 relative">
        <div className="bg-gradient-radial from-[#ffb945] to-[#ff7338] absolute w-2/3 h-2/3 right-0 bottom-0 rounded-full opacity-20 blur-3xl -z-0" />
        <div className="flex flex-row-reverse">
          <Image
            src="/step-2.1.png"
            width={400}
            height={500}
            alt="step-2"
            className="z-10"
          />
        </div>
        <div className="absolute -bottom-20 right-40 z-10">
          <Image
            src="/top-banner-milestones.png"
            className="z-10"
            width={400}
            height={500}
            alt="step-2-milestones.png"
          />
        </div>
      </div>

      <div className="w-1/2 space-y-6 p-4 place-content-center">
        <Button label="Step 2" />
        <div className="text-2xl font-semibold">Step Two of The Process</div>
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
    </div>
  )
}

export default StepTwo
