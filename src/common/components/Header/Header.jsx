import { ChevronDown, AccessibilityIcon, PersonStanding, ZoomIn, ZoomOut, UserCircle, Menu, X } from 'lucide-react';
import { MdContrast } from "react-icons/md";
import { FiMenu, FiUser } from "react-icons/fi";
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Header.css';

export function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
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
    window.location.href = '/';
    localStorage.removeItem('user');
    setIsLogged(false);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  }

  function handleOnSwitchAccessibility(){

     
    // return (
      
    // )
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


          
          <Link to="/" onClick={toggleMobileMenu}>INÍCIO</Link>
          <Link to="/offers" onClick={toggleMobileMenu}>BENEFÍCIOS</Link>
          <Link to="/funcionalidades" onClick={toggleMobileMenu}>FUNCIONALIDADES</Link>
          <Link to="/resultados" onClick={toggleMobileMenu}>RESULTADOS</Link>
          

        </nav>
        
        {isLogged ? (
          <div className="desktop-user">
               <div className="user-dropdown" ref={dropdownRef}>
      <Button className="user-button" onClick={toggleDropdown}>
        {username}
        <span className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}>▼</span>
      </Button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="user-info">
            <div className="user-name">Alberto Silva</div>
            <div className="user-email">alberto.silva@email.com</div>
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
          <UserCircle className='icon-blue' size={34} />
        </div>
      </div>
      
      <div 
        className={`overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      />
    </header>
  );
}