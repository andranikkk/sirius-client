import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import Auth from "./pages/auth"
import CalendarPage from "./pages/calendarPage"
import ProfilePage from "./pages/profilePage"

const container = document.getElementById("root")

const router = createBrowserRouter([
  { path: "/auth", element: <Auth /> },
  {
    path: "/",
    element: <CalendarPage />,
  },
  {
    path: "user/:username",
    element: <ProfilePage />,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
