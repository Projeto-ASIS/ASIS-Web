import { useUser } from "../contexts/UserProvider"

import { Navigate } from "react-router-dom"

import getUserToken from "../utils/getUserToken"
import { jwtDecode } from "jwt-decode"
import * as BackendService from "@/common/services/BackendService"

import useFetch from "../hooks/useFetch"

export default function EmployeeProtectedRoute({ children }) {

  const { data: role } = useFetch({
    fnKey: "user",
    fnMethod: async () => {
      try {
        let resDecoded
        const token = localStorage.getItem("user-package")

        if (token) {
          resDecoded = jwtDecode(localStorage.getItem("user-package"))
        }

        if (!token) return null

        const tokenSub = resDecoded.sub
        const user = await BackendService.getLoginByToken(tokenSub)

        return user.role
      } catch (error) {
        console.error(error)
        return null
      }
    }
  })

  console.log(role)

  if (role === "ROLE_FUNCIONARIO") {
    return children
  }

  if (role === "ROLE_USUARIO") {
    return <Navigate to="/user" replace />
  }

  return children  
}