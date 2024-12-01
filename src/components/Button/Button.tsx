import type React from "react"
import { IButtonProps } from "./types"
import { cn } from "../../utils"

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
