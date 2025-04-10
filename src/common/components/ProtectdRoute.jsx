import { Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"
import { useEffect } from "react"

function getUserToken(){
  const token = localStorage.getItem("user-package")

  if(!token) return null

  return token
  
}
export default function ProtectedRoute({ children }) {
  const user = useUser()
  const isAuthenticated = getUserToken()


  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}