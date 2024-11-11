import React from "react"
import { cn } from "@/utils"
import { poppins } from "@/app/font"

const ResultsFindBuilder = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-1">
        <div className={cn(poppins.className, "font-semibold text-2xl")}>
          Builder results
        </div>
        <div>showing 23 results:</div>
      </div>
    </div>
  )
}

export default ResultsFindBuilder
