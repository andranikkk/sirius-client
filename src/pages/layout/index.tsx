import type React from "react"
import Sidebar from "../../components/side bar"
import { Button, Image } from "@nextui-org/react"
import AppHeader from "../../components/header"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="p-4 bg-violet-200 rounded-3xl">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <AppHeader />
        <div className="flex-2 p-4 h-[100%]">{children}</div>
      </div>
    </div>
  )
}

export default Layout
