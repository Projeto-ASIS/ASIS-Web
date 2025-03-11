import { ChevronDown, AccessibilityIcon, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react';
import { MdContrast } from "react-icons/md";
import { FiMenu, FiUser } from "react-icons/fi";
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setIsLogged(true);
      setUsername(JSON.parse(loggedUser).name);
    }
  }, []);

  function handleLogin() {
    localStorage.setItem('user', JSON.stringify({ name: 'Alberto' }));
    setIsLogged(true);
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setIsLogged(false);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  }

  return (
    <header className="header">
      <div className="header__accessibility">
        <MdContrast size={16} />
        <ZoomIn size={16} />
        <ZoomOut size={16} />
        <PersonStanding size={16} />
      </div>
      
      <div className="navbar">
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <FiMenu size={24} />
        </div>
        
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        
        <nav className={`nav__links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <div className="logo-mobile">
              <img src="/Logo.png" alt="Logo" />
            </div>
            <div className="close-menu" onClick={toggleMobileMenu}>
              &times;
            </div>
          </div>
          
          <Link to="/" onClick={toggleMobileMenu}>INÍCIO</Link>
          <Link to="/offers" onClick={toggleMobileMenu}>BENEFÍCIOS</Link>
          <Link to="/funcionalidades" onClick={toggleMobileMenu}>FUNCIONALIDADES</Link>
          <Link to="/resultados" onClick={toggleMobileMenu}>RESULTADOS</Link>
          
          {isLogged && (
            <div className="mobile-user-info">
              <Button className="logged__user mobile">
                {username}
                <ChevronDown size={24} />
              </Button>
            </div>
          )}
          
          {!isLogged && (
            <div className="mobile-auth-buttons">
              <Link to="/sign-up" onClick={toggleMobileMenu}>
                <Button type='stroked'>
                  Cadastrar-se
                </Button>
              </Link>
              <Link to="/sign-in" onClick={toggleMobileMenu}>
                <Button type='default-secondary'>
                  Fazer login
                </Button>
              </Link>
            </div>
          )}
        </nav>
        
        {isLogged ? (
          <div className="desktop-user">
            <Button className="logged__user">
              {username}
              <ChevronDown size={24} />
            </Button>
          </div>
        ) : (
          <div className="auth__buttons desktop-auth">
            <Link to="/sign-up">
              <Button className="button-header" type='stroked'>
                Cadastrar-se
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button className="button-header" type='default-secondary'>
                Fazer login
              </Button>
            </Link>
          </div>
        )}
        
        <div className="mobile-user-icon">
          <FiUser size={24} />
        </div>
      </div>
      
      <div 
        className={`overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      />
    </header>
  );
}