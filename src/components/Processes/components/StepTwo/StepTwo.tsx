import Button from "@/components/Button"
import Image from "next/image"
import React from "react"

const StepTwo = () => {
  return (
    <div className="flex flex-row py-2">
      <div className="w-1/2">
        <Image src="/step-2.1.png" width={1000} height={1000} alt="step-2" />
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
