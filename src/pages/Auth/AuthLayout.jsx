import './AuthLayout.css'

import { Outlet } from "react-router-dom"

import { 
  useUser, 
  useUserLoadingContext 
} from '@/common/contexts/UserProvider'

import { Navigate } from 'react-router-dom'

export default function AuthLayout() {
  const user = useUser()
  const isLoading = useUserLoadingContext()

  if(isLoading) return null

  if (user && user.role === "ROLE_FUNCIONARIO") {
    return <Navigate to="/employee" />
  }

  if (user && user.role === "ROLE_USUARIO") {
    return <Navigate to="/user" />
  }

  return <>
    <main className='auth-container'>
      <div className="auth-image" >.</div>
      <>
        <Outlet />
      </>
    </main>
  </>
} 