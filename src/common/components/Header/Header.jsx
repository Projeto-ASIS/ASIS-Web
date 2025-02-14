import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <div className="container header-content">
      <div className="logo">
        ASIS
      </div>
      <nav className="nav-links">
        <a href="#inicio">INÍCIO</a>
        <a href="#beneficios">BENEFÍCIOS</a>
        <a href="#funcionalidades">FUNCIONALIDADES</a>
        <a href="#resultados">RESULTADOS</a>
      </nav>
      <div className="auth-buttons">
        <button className="btn-secondary-blue">CADASTRAR-SE</button>
        <button className="btn btn-primary">FAZER LOGIN</button>
      </div>
    </div>
  </header>
  )
}

export default Header