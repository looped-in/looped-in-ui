import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

const StepThree = () => {
  return (
    <div className="flex flex-row py-5 ">
      <div className="w-1/2 space-y-6 p-8 place-content-center">
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

      <div className="w-1/2">
        <Image src="/step-3.1.png" width={1000} height={1000} alt="step-1" />
      </div>
    </div>
  )
}

export default StepThree
