import type React from "react"
import { cn } from "../../../utils"
import { IButtonProps } from "./Button.types"

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={cn(
        "h-10 w-32 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gradient-to-b from-secondary to-primary text-white font-bold",
        props.className
      )}
      type={props.type}
      onClick={props?.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

export default Button
