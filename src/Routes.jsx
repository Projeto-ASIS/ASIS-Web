import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Signup from "./pages/Auth/Sign-up/Signup"
import Signin from "./pages/Auth/Sign-in/Signin"
import Appoinments from "./pages/User/Services/Appoinments/Appoinsments"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  { element: <Cadunico />, path: "/user/Services/Cadunico", },
  { element: <Appoinments />, path: "/user/Services/Appoinments", },
  { element: <About />, path: "/about" },
  { element: <Signup />, path: "/auth/signup" },
  { element: <Signin />, path: "/auth/signin" },
  { element: <Homepage />, path: "/" },

]) 