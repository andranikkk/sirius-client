/* eslint-disable @typescript-eslint/no-restricted-imports */
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react"
import { useCurrentQuery } from "../../app/services/userApi"
import { useParams } from "react-router-dom"
import Popup from "../popup"

const AppHeader = () => {
  const user = useCurrentQuery()
  const { username } = useParams()

  return (
    <Navbar className="h-[60px] shadow-md rounded-br-3xl rounded-bl-3xl">
      <NavbarBrand>
        {username && (
          <p className="text-[20px]">
            Добро пожаловать,
            <span className="text-violet-600"> {user.currentData?.name}</span>!
          </p>
        )}
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button disableAnimation className="bg-transparent">
          <Image src="/assets/chat.svg" />
        </Button>
      </NavbarContent>
      <Popup />
    </Navbar>
  )
}

export default AppHeader
