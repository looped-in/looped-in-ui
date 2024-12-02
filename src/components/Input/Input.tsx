import { cn } from "../utils"
import React from "react"

const Input: React.FC<any> = (props) => {
  return (
    <input
      className={cn(
        "h-10 w-32 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gradient-to-b from-secondary to-primary text-white font-bold",
        props.className
      )}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  )
}

export default Input
