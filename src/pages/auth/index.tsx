import { Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react"
import { useState } from "react"
import Login from "../../features/login"
import Register from "../../features/register"

const Auth = () => {
  const [selected, setSelected] = useState("")

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Card className="max-w-full w-[340px] min-h-[500px] items-center">
          <div className="text-3xl flex justify-center items-center flex-col m-4">
            <Image src="/assets/logomark.svg" />
            <p className="mt-5">Вход в Sirius Future</p>
          </div>
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              selectedKey={selected}
              onSelectionChange={key => setSelected(key as string)}
            >
              <Tab key="login" title="Login">
                <Login setSelected={setSelected} />
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <Register setSelected={setSelected} />
              </Tab>
            </Tabs>
          </CardBody>
          <Tabs className="m-5">
            <Tab key="ru" title="RU"></Tab>
            <Tab key="en" title="EN"></Tab>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

export default Auth
