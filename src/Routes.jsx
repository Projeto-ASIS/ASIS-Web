import { createBrowserRouter } from "react-router-dom"

import User from "@/pages/User"
import About from "@/pages/About/About"
import Homepage from "@/pages/Homepage/Homepage"
import Cadunico from "@/pages/User/Services/Cadunico/Cadunico"
import Appoinments from "@/pages/User/Services/Appoinments/Appoinsments"
import AuthLayout from "@/pages/Auth/AuthLayout"
import Signup from "@/pages/Auth/Sign-up/Signup"
import Signin from "@/pages/Auth/Sign-in/Signin"
import ForgotPassword from "@/pages/Auth/ForgotPassword/ForgotPassword"
import PsycologicalSupport from "@/pages/User/Services/PsychologicalSupport/PsycologicalSupport"
import Homevisit from "@/pages/User/Services/HomeVisit/Homevisit"
import RegistrationUpdate from "@/pages/User/Services/RegistrationUpdate/RegistrationUpdate"
import AboutServiceLayout from "@/pages/User/Services/AboutServiceLayout"
import AboutCadunico from "./pages/User/Services/Cadunico/AboutCadunico"
import AboutHomevisit from "./pages/User/Services/HomeVisit/AboutHomevisit"
import AboutRegistrationUpdate from "./pages/User/Services/RegistrationUpdate/AboutRegistrationUpdate"
import AboutPsychological from "./pages/User/Services/PsychologicalSupport/AboutPsychological"
import AppoinmentsAbout from "./pages/User/Services/Appoinments/AppoinmentsAbout"
import EmployeeLayout from "./pages/Employee/EmployeeLayout"
import InitialTab from "./pages/Employee/InitialTab/InitialTab"
import AppoinmentsTab from "./pages/Employee/AppoinmentsTab/AppoinmentsTab"


export const router = createBrowserRouter([
  {
  element: <AuthLayout />,
  children: [
    { element: <Signup />, path: "sign-up" },
    { element: <Signin />, path: "sign-in" },
    { element: <ForgotPassword />, path: "forgot-pass" }
  ]
},
{ element: <Homepage />, path: "/" },
{ element: <Homepage />, path: "/home" },
{ element: <About />, path: "/about" },
{ element: <User />, path: "/user" },
{ element: <PsycologicalSupport />, path: "/user/Services/PsychologicalSupport" },
{ element: <PsycologicalSupport />, path: "psy" },
{ element: <Homevisit />, path: "/user/Services/Homevisit" },
{ element: <Cadunico />, path: "/user/Services/Cadunico" },
{ element: <Appoinments />, path: "/user/Services/Appoinments" },
{ element: <RegistrationUpdate />, path: "/user/Services/RegistrationUpdate" },
{ element: <Cadunico />, path: "/cadunico" },
{ element: <Appoinments />, path: "/user/Services/Appoinments" },
// { element: <Appoinments />, path: "/app" },
{
  element: <AboutServiceLayout />,
  path: "services",
  children: [
    { element: <AboutCadunico />, path: "cadunico/about" },
    { element: <AboutHomevisit />, path: "homevisit/about" },
    { element: <AboutRegistrationUpdate />, path: "registrationupdate/about" },
    { element: <AboutPsychological />, path: "psychologicalsupport/about" },
    { element: <AppoinmentsAbout />, path: "appoinments/about" }
  ]
},
{
  element: <EmployeeLayout />,
  path: "employee",
  children: [
    { index: true, element: <InitialTab /> },
    { path: "InitialTab", element: <InitialTab /> },
    { path: "AppoinmentsTab", element: <AppoinmentsTab /> }
  ]
},
{ element: <Signup />, path: "/auth/signup" },
{ element: <Signin />, path: "/auth/signin" }
]) 