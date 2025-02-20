// import React from 'react'
import { Contrast, ContrastIcon, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react'
import { MdContrast } from "react-icons/md";
import Button from '../Button'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="acessibility">
        <MdContrast size={25}/>
        <PersonStanding />
        <ZoomIn />
        <ZoomOut />
      </div>
      <div className="navbar container header-content">
        <div className="logo">
          <img src="Logo.png" alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="#inicio">INÍCIO</a>
          <a href="#beneficios">BENEFÍCIOS</a>
          <a href="#funcionalidades">FUNCIONALIDADES</a>
          <a href="#resultados">RESULTADOS</a>
        </nav>
        <div className="auth-buttons">
          <Button type='stroked' >Cadastrar-se</Button>
          <Button type='default-secondary'>Fazer login</Button>
        </div>
      </div>
    </header>
  )
}
