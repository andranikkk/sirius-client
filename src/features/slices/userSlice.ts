import type { User } from "../../app/types"
import { createSlice } from "@reduxjs/toolkit"
import { userApi } from "../../app/services/userApi"
import type { RootState } from "../../app/store"

interface InitialState {
  user: (User & { token: string }) | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addMatcher(
        userApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user = action.payload
          state.isAuthenticated = true
        },
      )
      .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
  },
})

export const { logout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated

export const selectUser = (state: RootState) => state.auth.user
