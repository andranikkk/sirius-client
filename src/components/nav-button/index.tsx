import type React from "react"
import CustomButton from "../button"
import { Link } from "react-router-dom"
import { Image } from "@nextui-org/react"

type Props = {
  children: React.ReactNode
  icon: string
  href: string
  onClick?: () => void
}

const NavButton: React.FC<Props> = ({ children, icon, href }) => {
  return (
    <CustomButton className="flex justify-start text-xl" fullWidth>
      <Image src={icon} />
      <Link to={href}>{children}</Link>
    </CustomButton>
  )
}

export default NavButton
