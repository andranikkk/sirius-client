import type React from "react"
import { Button, Input, Link } from "@nextui-org/react"
import { useState } from "react"
import { useRegisterMutation } from "../app/services/userApi"
import ErrorMessage from "../components/errorMessage"
import { useNavigate } from "react-router-dom"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import type { User } from "../app/types"

type Props = {
  setSelected: (value: string) => void
}

type RegisterData = Omit<User, "id"> & { confirmPassword: string }

const Register: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [registerUser, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const onSubmit: SubmitHandler<RegisterData> = async data => {
    try {
      await registerUser(data).unwrap()
      navigate("/")
    } catch (error) {
      console.error(error, "Registration error")
      setError("Registration failed")
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email", { required: true })}
        label="Email"
        type="email"
      />
      {errors.email && <ErrorMessage error="Email is required" />}

      <Input
        {...register("name", { required: true })}
        label="Name"
        type="text"
      />
      {errors.name && <ErrorMessage error="Name is required" />}

      <Input
        {...register("password", { required: true })}
        label="Password"
        type="password"
      />
      {errors.password && <ErrorMessage error="Password is required" />}

      <Input
        {...register("confirmPassword", { required: true })}
        label="Confirm Password"
        type="password"
      />
      {errors.confirmPassword && (
        <ErrorMessage error="Confirm Password is required" />
      )}

      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Уже есть аккаунт?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("login")}
        >
          Войти
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Регистрация
        </Button>
      </div>
    </form>
  )
}

export default Register
