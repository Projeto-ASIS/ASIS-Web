import "./Footer.css"

import logoSvgPath from "@/assets/Logo.svg"
import facebookIconSvtPath from "@/assets/Facebook Icon.svg"
import instagramIconSvtPath from "@/assets/Instagram Icon.svg"
import linkedinIconSvtPath from "@/assets/Linkedin Icon.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
      <div className="footer__top__logo__mobile">
          <img src={logoSvgPath} alt="" className="footer__top__brand" />
          <h3 className="footer__top__company-name">ASIS</h3>
        </div>
        <ul className="footer__top__menu">
          <li><a href="/home">Inicio</a></li>
          <li><a href="/home">Serviços</a></li>
          <li><a href="/home">Sobre nós</a></li>
        </ul>
        <div className="footer__top__logo__desktop">
          <img src={logoSvgPath} alt="" className="footer__top__brand" />
          <h3 className="footer__top__company-name">ASIS</h3>
        </div>
        <ul className="footer__top__social-medias">
          <li><img src={facebookIconSvtPath} alt="" /></li>
          <li><img src={instagramIconSvtPath} alt="" /></li>
          <li><img src={linkedinIconSvtPath} alt="" /></li>
        </ul>
      </div>
      <p className="footer__auth">ASIS @ 2025. Todos os direitos Reservados</p>
    </footer>
  )
}