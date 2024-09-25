import Image from "next/image"
import React from "react"
import Button from "../Button"
import { Input } from "@/components/ui/input"

function Footer() {
  return (
    <div className="bg-[#2E2A30] p-20">
      <Image src="/logo-white.svg" width={100} height={100} alt="logo" />

      <div className="pt-5 text-white text-4xl">Stay in the Loop!</div>
      <div className="text-white py-2">
        Subscribe by entering your email below to stay in the loop.
      </div>

      <div className="space-x-2 py-6 flex flex-row">
        <Input className="w-30" placeholder="Enter email" />
        <Button label="Subcribe" />
      </div>

      <div className="text-white">Find us on,</div>

      <div className="flex flex-row place-content-between text-sm pt-4">
        <div className="flex flex-row text-white space-x-2 ">
          <div>Instagram</div>
          <div>Facebook</div>
          <div>Youtube</div>
          <div>Linkedin</div>
        </div>

        <div className="text-white flex flex-row space-x-3">
          <div>Term & Conditions</div>
          <div>|</div>
          <div>Privacy</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
