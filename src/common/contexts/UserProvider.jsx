import * as BackendService from "@/common/services/BackendService"

import useFetch from "../hooks/useFetch"
import { createContext } from "react"

import userMocked from "@/common/mocks/user"

const UserContext = createContext(null)

export default function UserProvider({ children }) {
  const { data: user } = useFetch({
    fnKey: "user",
    fnMethod: async () => {
      try {

        return
      } catch (error) {
        console.error(error)
      }
    }
  })

  console.log("User data:", user)
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}