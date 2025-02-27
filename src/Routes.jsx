import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Appoinments from "./pages/User/Services/Appoinments/Appoinsments"

import AuthLayout from "@/pages/Auth/AuthLayout"
import Signup from "@/pages/Auth/Sign-up/Signup"
import Signin from "@/pages/Auth/Sign-in/Signin"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  {
    element: <AuthLayout />,
    // path: "/",
    // errorElement: <h1>Error</h1>,
    children: [
      { element: <Signup />, path: "sign-up" },
      { element: <Signin />, path: "sign-in" },
    ]
  },
  // { element: <Cadunico />, path: "/user/Services/Cadunico", },
  // { element: <Appoinments />, path: "/user/Services/Appoinments", },
  // { element: <About />, path: "/about" },
  // { element: <Homepage />, path: "/" },

]) 