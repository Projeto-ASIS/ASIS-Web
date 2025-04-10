import './AuthLayout.css'
import { Outlet } from "react-router-dom"


export default function AuthLayout({ children }) {
  return <>
    <main className='auth-container'>
      <div className="auth-image" >.</div>
      <>
        <Outlet />
      </>

    </main>
  </>
} 