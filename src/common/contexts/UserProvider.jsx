import * as BackendService from "@/common/services/BackendService"

import useFetch from "@/common/hooks/useFetch"

import { createContext, useContext } from "react"

const UserContext = createContext(null)

export default function UserProvider({ children }) {
  const { data: user } = useFetch({
    fnKey: "user",
    fnMethod: async () => {
      try {
        const userInJson = JSON.parse(localStorage.getItem("user-package"))

        if(typeof userInJson !== "object") return null
        
        return userInJson
      } catch (error) {
        console.error(error)
        return null
      }
    }
  })

  console.log("User value", user)

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  return useContext(UserContext)
}