import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import Homepage from "./pages/Homepage/Homepage"


export const router = createBrowserRouter([
  {
    element: <User />,
    path: "/user",
  },
  {
    element: <Homepage />,
    path: "/"
  }
]) 