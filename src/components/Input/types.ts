import { LucideIcon } from "lucide-react"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
  fillIcon?: boolean
  onClickIcon?: () => void
}
