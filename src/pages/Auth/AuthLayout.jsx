import './AuthLayout.css'

import shape from '../../assets/shapeauth.png'
import Logo from '../../assets/LogoASISCentralizada.png'
import { Outlet } from "react-router-dom"
import { ChevronLeft } from 'lucide-react'

export default function AuthLayout({ children }) {
  return <>
    <main className='signin-container'>
      <div className="signin-image" />
      <>
      
      <Outlet />
      </>
      
    </main>


  </>
} 