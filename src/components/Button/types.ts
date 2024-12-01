export interface IButtonProps {
  styles?: string
  disabled?: boolean
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}
