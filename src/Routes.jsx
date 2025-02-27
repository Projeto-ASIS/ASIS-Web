import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Signup from "./pages/Auth/Sign-up/Signup"
import Signin from "./pages/Auth/Sign-in/Signin"
import Appoinments from "./pages/User/Services/Appoinments/Appoinsments"
import AuthLayout from "./pages/Auth/AuthLayout"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  { element: <AuthLayout />,path: "/auth", children: [
    { element: <Signup />, path: "/signup" },
    { element: <Signin />, path: "/signin" },
  ]},
  { element: <Cadunico />, path: "/user/Services/Cadunico", },
  { element: <Appoinments />, path: "/user/Services/Appoinments", },
  { element: <About />, path: "/about" },
  { element: <Homepage />, path: "/" },

]) 