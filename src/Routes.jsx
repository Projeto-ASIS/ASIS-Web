import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Signup from "./pages/Auth/Sign-up/Signup"
import Signin from "./pages/Auth/Sign-in/Signin"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  { element: <Cadunico />, path: "/user/Services/Cadunico", },
  { element: <About />, path: "/about" },
  { element: <Signup />, path: "/auth/signup" },
  { element: <Signin />, path: "/auth/signin" },
  { element: <Homepage />, path: "/" },

]) 