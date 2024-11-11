import { cn } from "@/utils"
import { LucideIcon } from "lucide-react"
import * as React from "react"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
  fillIcon?: boolean
  onClickIcon?: () => void
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      onClickIcon,
      fillIcon = false,
      ...props
    }: IInputProps,
    ref
  ) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div
            onClick={onClickIcon}
            className={cn(
              "absolute left-1.5 top-1/2 transform -translate-y-1/2",
              fillIcon &&
                "p-3 bg-gradient-to-b from-[#ffb945] to-[#ff7338] rounded-xl"
            )}
          >
            <StartIcon size={18} className="text-muted-foreground" />
          </div>
        )}

        <input
          className={cn(
            "flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-red-700 rounded-xl border border-input",
            className
          )}
          type={type}
          {...props}
          ref={ref}
        />

        {/* <div className="rounded-full p-0.5 focus-within:bg-gradient-to-b focus-within:from-[#ffb945] focus-within:to-[#ff7338]">
          <input
            className={cn(
              "flex h-10 w-full bg-background px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none rounded-full border border-input focus-visible:border-none",
              className
            )}
            type={type}
            ref={ref}
            {...props}
          />
        </div> */}

        {EndIcon && (
          <div
            onClick={onClickIcon}
            className={cn(
              "absolute right-6 top-1/2 transform -translate-y-1/2",
              fillIcon &&
                "p-3 bg-gradient-to-b from-[#ffb945] to-[#ff7338] rounded-lg"
            )}
          >
            <EndIcon
              className="text-muted-foreground"
              color={fillIcon ? "#fff" : "#BDBDBD"}
              size={18}
            />
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
