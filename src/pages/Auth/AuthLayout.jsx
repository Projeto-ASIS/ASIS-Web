import './AuthLayout.css'

import shape from '../../assets/shapeauth.png'
import Logo from '../../assets/LogoASISCentralizada.png'

import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main className='main'>
      <div className="brand">
        <img src={shape} alt="" />
        <img className='sign-up__logo' src={Logo} alt="" />
      </div>
      <Outlet />
    </main>
  )
} 