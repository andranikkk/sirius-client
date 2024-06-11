import { createListenerMiddleware } from "@reduxjs/toolkit"
import { userApi } from "../services/userApi"

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: userApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    console.log(action.payload)
    if (action.payload.token) {
      localStorage.setItem("token", action.payload.token)
    }
  },
})
listenerMiddleware.startListening({
  matcher: userApi.endpoints.register.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    console.log(action.payload)
    if (action.payload.token) {
      localStorage.setItem("token", action.payload.token)
    }
  },
})
