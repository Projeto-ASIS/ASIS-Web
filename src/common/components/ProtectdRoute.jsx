import { Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"

export default function UserProtectedRoute({ children }) {
  const user = useUser()

  if (user && user.role === "ROLE_FUNCIONARIO") {
    return <Navigate to="/employee" replace />
  }

  if (user && user.role === "ROLE_USUARIO") {
    return children
  }

  return <Navigate to="/sign-in" replace />

}