import React from "react"
import { cn } from "../../utils"

const Input: React.FC = (props: any) => {
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
    ></input>
  )
}

export default Input
