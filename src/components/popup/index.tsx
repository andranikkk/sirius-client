/* eslint-disable @typescript-eslint/no-restricted-imports */
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react"
import { CiLogout } from "react-icons/ci"
import { logout } from "../../features/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useCurrentQuery } from "../../app/services/userApi"

const Popup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useCurrentQuery()

  const onLogoutClick = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User
          as="button"
          name=""
          description=""
          className="transition-transform"
          avatarProps={{
            src: "/avatar.svg",
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <div className="w-[250px] p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Смена пользователя</h3>
          <div className="flex items-center mb-4">
            <Button className="w-full justify-start bg-violet-200 h-[55px]">
              <User
                name=""
                description=""
                className="transition-transform"
                avatarProps={{
                  src: "/avatar.svg",
                }}
              />
              <div className="ml-2">
                <p className="font-medium">{user.currentData?.name}</p>
                <p className="text-sm text-gray-500">Это вы</p>
              </div>
            </Button>
          </div>
          <div className="flex items-center mb-4">
            <Button className="w-full justify-start bg-transparent h-[55px]">
              <User
                name=""
                description=""
                className="transition-transform"
                avatarProps={{
                  src: "/anna.svg",
                }}
              />
              <div className="ml-2">
                <p className="font-medium">Анна</p>
              </div>
            </Button>
          </div>
          <hr />
          <Button
            color="secondary"
            variant="ghost"
            className="mt-4 flex items-center gap-2 w-full justify-between border-none"
            endContent={<CiLogout />}
            onClick={onLogoutClick}
          >
            Выйти
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Popup
