import { Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"

export default function ProtectedRoute({ children }) {
  const user = useUser()
  const isAuthenticated = Boolean(user)

  console.log("User: ", user)
  console.log("isAU: ", user)

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}