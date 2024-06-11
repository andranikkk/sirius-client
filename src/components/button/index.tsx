import { Button as NextButton } from "@nextui-org/react"
import type React from "react"

type Props = {
  children: React.ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  color?:
    | "default"
    | "warning"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | undefined
}

const Button: React.FC<Props> = ({
  children,
  className,
  type,
  fullWidth,
  color,
}) => {
  return (
    <NextButton
      size="lg"
      color={color}
      variant="light"
      className={className}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </NextButton>
  )
}

export default Button
