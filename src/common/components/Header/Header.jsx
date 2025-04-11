import { PersonStanding, ZoomIn, ZoomOut, UserCircle, Menu, X } from 'lucide-react';

import { MdContrast } from "react-icons/md";

import { usePreferencesDispatcher } from "@/common/contexts/HighContrastProvider"

import Button from '../Button';
import { useNavigate } from 'react-router-dom';

import { Link, Navigate, useLocation } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

import './Header.css';

import getUserToken from '@/common/utils/getUserToken';
import { useUser } from '@/common/contexts/UserProvider';

export function Header() {
  const token = getUserToken()
  const navigate = useNavigate()
  const user = useUser()
  const [isLogged, setIsLogged] = useState(!!token);
  const [sections, setSections] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log('User', user)

  const preferencesDispatcher = usePreferencesDispatcher()

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  console.log("Location", location)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleLogout() {
    localStorage.removeItem("user-package")
    navigate(0)
  }

  useEffect(() => {
    const pageSections = []
    let newSections = document.querySelectorAll("[data-section-id]")

    newSections.forEach((section) => {
      pageSections.push({
        name: section.dataset.sectionId,
        to: section.dataset.sectionRedirect
      })
    })
    console.log(pageSections)

    setSections(pageSections)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  }

  function handleOnSwitchAccessibility() {
    preferencesDispatcher({ type: "toogle" })
  }

  return (
    <header className="header">
      <div className="header__accessibility">
        <MdContrast size={16} />
        <ZoomIn size={16} />
        <ZoomOut size={16} />
        <PersonStanding onClick={handleOnSwitchAccessibility} size={16} />
      </div>


      <div className="navbar">
        <div className="navbar__content">
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <Menu className='icon-blue' size={34} />
          </div>

          <div className="logo">
            <a href='/'> <img src="/Logo.png" alt="Logo" /> </a>
          </div>

          <nav className={`nav__links ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-header">
              <div className="logo-mobile">
                <img src="/Logo.png" alt="Logo" />
              </div>
              <div className="close-menu" onClick={toggleMobileMenu}>
                <X size={34} />
              </div>
            </div>

            {sections.lenght !== 0 && sections.map((section) => <Link onClick={toggleMobileMenu} to={section.to}>{section.name}</Link>)}
          </nav>

          {isLogged ? (
            <div className="desktop-user">
              <div className="user-dropdown" ref={dropdownRef}>
                <Button className="user-button" onClick={toggleDropdown}>
                  {user?.nomeCompleto && `Seja bem-vindo, ${user.nomeCompleto}`}
                  <span className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}>▼</span>
                </Button>

                {isOpen && (
                  <div className="dropdown-menu">
                    <div className="user-info">
                      <div className="user-name">{user?.nomeCompleto}</div>
                      <div className="user-email">{user.email}</div>
                    </div>
                    <a href="#perfil" className="dropdown-item">Meu Perfil</a>
                    <a href="#configuracoes" className="dropdown-item">Configurações</a>
                    <a href="#ajuda" className="dropdown-item">Ajuda</a>
                    <button onClick={handleLogout} href="#sair" className=" logout">Sair</button>
                  </div>
                )}
              </div>


            </div>

          ) : (
            <div className="auth__buttons desktop-auth">
              <Link to="/sign-up">
                <Button className="button-header button-header--sign-in" type='stroked'>
                  Cadastrar-se
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button className="button-header" type='default'>
                  Fazer login
                </Button>
              </Link>
            </div>
          )}

          <div className="mobile-user-icon">
            <UserCircle className='icon-blue' size={34} />
          </div>
        </div>
      </div>
      <div
        className={`overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />
    </header>
  );
}