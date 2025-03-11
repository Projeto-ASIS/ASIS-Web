import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Signup from "./pages/Auth/Sign-up/Signup"
import Signin from "./pages/Auth/Sign-in/Signin"
import Appoinments from "./pages/User/Services/Appoinments/Appoinsments"
import AboutServiceLayout from "@/pages/User/Services/AboutServiceLayout"
import AboutCadunico from "./pages/User/Services/Cadunico/AboutCadunico"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  { element: <Cadunico />, path: "/cadunico", },
  { element: <Appoinments />, path: "/user/Services/Appoinments", },
  { element: <About />, path: "/about" },
  {
    element: <AboutServiceLayout />,
    path: "services",
    children: [
      { element: <AboutCadunico />, path: "cadunico/about" },
    ]
  },
  { element: <Signup />, path: "/auth/signup" },
  { element: <Signin />, path: "/auth/signin" },
  { element: <Homepage />, path: "/home" },

]) 