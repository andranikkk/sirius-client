import type React from "react"
import { useForm } from "react-hook-form"
import { Button, Checkbox, Link } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import type { UserData } from "../app/services/userApi"
import { useLazyCurrentQuery, useLoginMutation } from "../app/services/userApi"
import CustomInput from "../components/input"
import ErrorMessage from "../components/errorMessage"

type Props = {
  setSelected: (value: string) => void
}

const Login: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserData>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [triggerCurrentQuery] = useLazyCurrentQuery()
  const [isSelected, setIsSelected] = useState(false)

  const onSubmit = async (data: UserData) => {
    try {
      await login(data).unwrap()
      await triggerCurrentQuery().unwrap()
      navigate("/")
    } catch (error) {
      console.error(error, "Login error")
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Required field!"
      />
      <CustomInput
        control={control}
        name="password"
        label="Password"
        type="password"
        required="Required field!"
      />
      <ErrorMessage error={error} />
      <div className="flex flex-col gap-2">
        <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
          Запомнить меня
        </Checkbox>
      </div>
      <div className="flex gap-2 justify-end flex-col">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Войти
        </Button>
        <div className="flex justify-between text-blue-600 cursor-pointer">
          <p>Забыл пароль?</p>
          <p>Войти как тренер</p>
        </div>
      </div>
      <p className="text-center text-small m-4">
        Нет аккаунта?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("sign-up")}
        >
          Зарегистрироваться
        </Link>
      </p>
    </form>
  )
}

export default Login
