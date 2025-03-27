import * as BackendService from "@/common/services/BackendService"

import useFetch from "@/common/hooks/useFetch"

import { createContext } from "react"

const UserContext = createContext(null)

export default function UserProvider({ children }) {
  const { data: user } = useFetch({
    fnKey: "user",
    fnMethod: async () => {
      try {
        let user = null
        const userJWTTOken = getCookie('user-token-jwt')

        if(userJWTTOken){
          user = await BackendService.get
        }


        return
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}