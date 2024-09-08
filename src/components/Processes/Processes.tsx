import React from "react"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"

const Processes = () => {
  return (
    <div className="flex flex-col py-20">
      <div className="text-center text-6xl font-semibold">
        Loopedin the right way!
      </div>

      <StepOne />

      <StepTwo />

      <StepThree />
    </div>
  )
}

export default Processes
