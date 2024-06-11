import type { User } from "./../types"
import { api } from "./api"

export type UserData = Omit<User, "id">

type ResponseLoginData = User & { token: string }

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: userData => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: userData => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),

    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: "/user/current",
        method: "GET",
      }),
    }),

    getUserById: builder.query<User, string>({
      query: id => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation<string, User>({
      query: user => ({
        url: `/user/edit/${user.id}`,
        method: "PUT",
        body: user,
      }),
    }),
  }),
})

export const {
  useCurrentQuery,
  useGetUserByIdQuery,
  useLazyCurrentQuery,
  useLazyGetUserByIdQuery,
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApi

export const {
  endpoints: { login, register, current, getUserById, updateUser },
} = userApi
