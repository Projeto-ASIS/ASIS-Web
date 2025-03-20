import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "./pages/Homepage/Homepage"
import Cadunico from "./pages/User/Services/Cadunico/Cadunico"
import Appoinments from "./pages/User/Services/Appoinments/Appoinsments"
import AuthLayout from "@/pages/Auth/AuthLayout"
import Signup from "@/pages/Auth/Sign-up/Signup"
import Signin from "@/pages/Auth/Sign-in/Signin"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword"
import PsycologicalSupport from "./pages/User/Services/PsychologicalSupport/PsycologicalSupport"
import Homevisit from "./pages/User/Services/HomeVisit/Homevisit"
import RegistrationUpdate from "./pages/User/Services/RegistrationUpdate/RegistrationUpdate"
import AboutServiceLayout from "@/pages/User/Services/AboutServiceLayout"
import AboutCadunico from "./pages/User/Services/Cadunico/AboutCadunico"
import AboutHomevisit from "./pages/User/Services/HomeVisit/AboutHomevisit"
import AboutRegistrationUpdate from "./pages/User/Services/RegistrationUpdate/AboutRegistrationUpdate"
import AboutPsychological from "./pages/User/Services/PsychologicalSupport/AboutPsychological"
import AppoinmentsAbout from "./pages/User/Services/Appoinments/AppoinmentsAbout"


export const router = createBrowserRouter([
  { element: <User />, path: "/user", },
  {
    element: <AuthLayout />,
    // path: "/",
    // errorElement: <h1>Error</h1>,
    children: [
      { element: <Signup />, path: "sign-up" },
      { element: <Signin />, path: "sign-in" },
      {element:<ForgotPassword /> , path: "forgot-pass"}
    ]
  },
  {element: <User /> , path:"/user"},
  { element: <PsycologicalSupport />, path: "/user/Services/PsychologicalSupport", },
  { element: <Homevisit />, path: "/user/Services/Homevisit", },
  { element: <Cadunico />, path: "/user/Services/Cadunico", },
  { element: <Appoinments />, path: "/user/Services/Appoinments", },
  { element: <About />, path: "/about" },
  { element: <Homepage />, path: "/" },
  { element: <RegistrationUpdate />, path: "/user/Services/RegistrationUpdate", },
  { element: <Cadunico />, path: "/cadunico", },
  { element: <Appoinments />, path: "/user/Services/Appoinments", },
  { element: <About />, path: "/about" },
  {
    element: <AboutServiceLayout />,
    path: "services",
    children: [
      { element: <AboutCadunico />, path: "cadunico/about" },
      { element: <AboutHomevisit />, path: "homevisit/about" },
      { element: <AboutRegistrationUpdate />, path: "registrationupdate/about" },
      { element: <AboutPsychological />, path: "psychologicalsupport/about" },
      { element: <AppoinmentsAbout/> , path: "appoinments/about"}
    ]
  },
  { element: <Signup />, path: "/auth/signup" },
  { element: <Signin />, path: "/auth/signin" },
  { element: <Homepage />, path: "/home" },

]) 