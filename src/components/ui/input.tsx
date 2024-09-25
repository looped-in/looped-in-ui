import { cn } from "@/utils"
import * as React from "react"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }: IInputProps, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        type={type}
        {...props}
        ref={ref}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }