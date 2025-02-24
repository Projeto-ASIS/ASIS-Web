// import React from 'react'
import { ChevronDown, Contrast, ContrastIcon, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react'
import { MdContrast } from "react-icons/md";
import Button from '../Button'
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import './Header.css'

export function Header() {
  const [isLogged, setIsLogged] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) {
      setIsLogged(true)
      setUsername(JSON.parse(loggedUser).name)
    }
  }, [])

  function handleLogin() {
    localStorage.setItem('user', JSON.stringify({ name: 'Alberto' }))
    setIsLogged(true)
  }

  function handleLogout() {
    localStorage.removeItem('user')
    setIsLogged(false)
  }

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
        <nav className="nav__links">
          <Link to="/">INÍCIO</Link>
          <Link to="/offers">BENEFÍCIOS</Link>
          <Link to="/funcionalidades">FUNCIONALIDADES</Link>
          <Link to="/resultados">RESULTADOS</Link>
        </nav>
        {isLogged ? (
          <div className="logged__user">
             {username}
             <ChevronDown size={35}/>
            
          </div>
        ) : (
          <div className="auth__buttons">
            <Button type='stroked'>Cadastrar-se</Button>
            <Button type='default-secondary'  onClick={handleLogin}>Fazer login</Button>
          </div>
        )}
      </div>
    </header>
  )
}

