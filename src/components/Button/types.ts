export interface IButtonProps {
  disabled?: boolean
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}
