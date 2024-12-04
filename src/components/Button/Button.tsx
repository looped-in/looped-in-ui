import { cn } from "../utils"
import { IButtonProps } from "./types"
import React from "react"

const Button: React.FC<IButtonProps> = (props) => {
  const { label, className, disabled, type } = props
  return (
    <button
      className={cn(
        "h-10 w-32 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gradient-to-b from-secondary to-primary text-white font-bold",
        className
      )}
      type={type}
      onClick={props?.onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
