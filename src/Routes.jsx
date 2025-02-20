import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"


export const router = createBrowserRouter([
  {
    element: <User />,
    path: "/user",
  },
  { element: <About />, path: "/about" },
  {
    element: <Homepage />,
    path: "/"
  }
]) 