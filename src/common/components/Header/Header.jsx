// import React from 'react'
import { ChevronDown, AccessibilityIcon, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react'
import { MdContrast } from "react-icons/md";
import Button from '../Button'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
      <div className="header__accessibility">
        <MdContrast className="header__accessibility__option--high-contrast" size={16} />
        <ZoomIn className="header__accessibility__option--zoom-in" size={16} />
        <ZoomOut size={16} />
        <PersonStanding size={16} />
      </div>
      <div className="navbar container header-content">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <nav className="nav__links">

          <Link to="/">INÍCIO</Link>
          <Link to="/offers">BENEFÍCIOS</Link>
          <Link to="/funcionalidades">FUNCIONALIDADES</Link>
          <Link to="/resultados">RESULTADOS</Link>
        </nav>
        {isLogged ? (
          <Button className="logged__user">
            {username}
            <ChevronDown size={35} />

          </Button>
        ) : (
          <div className="auth__buttons">

            <Link to="/sign-up">
              <Button type='stroked'>
                Cadastrar-se
              </Button>
            </Link>



            <Link style={{ color: 'white' }} to="/sign-in">
              <Button type='default-secondary'>
                Fazer login
              </Button>
            </Link>

          </div>
        )}
      </div>
    </header>
  )
}

