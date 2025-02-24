import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  { element: <Cadunico />, path: "/user/cadunico", },
  { element: <About />, path: "/about" },
  { element: <Homepage />, path: "/" },

]) 