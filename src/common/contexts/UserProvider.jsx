import useFetch from "@/common/hooks/useFetch"

import { createContext, useContext, useEffect } from "react"

import { jwtDecode } from "jwt-decode"
import * as BackendService from "@/common/services/BackendService"

const UserContext = createContext(null)
const UserLoadingContext = createContext(null)

export default function UserProvider({ children }) {
  const { data: user, isLoading } = useFetch({
    fnKey: "user",
    fnMethod: async () => {
      try {
        let resDecoded
        const token = localStorage.getItem("user-package")

        if (token) {
          resDecoded = jwtDecode(localStorage.getItem("user-package"))

        }

        console.log("resDecoded: ", resDecoded)

        if (typeof resDecoded !== "object") return null

        const tokenSub = resDecoded.sub
        const userRes = await BackendService.getLoginByToken(tokenSub)
        console.log("userRes: ", userRes.data)

        return userRes.data
      } catch (error) {
        console.error(error)
        return null
      }
    }
  })

  return (
    <UserContext.Provider value={user}>
      <UserLoadingContext.Provider value={isLoading}>
        {children}
      </UserLoadingContext.Provider>
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
export function useUserLoadingContext() {
  return useContext(UserLoadingContext)
}