import { useState, useEffect } from "react";
import { ContactRound, LucideTvMinimalPlay } from "lucide-react";
import ZapIcon from "@/common/components/ZapIcon";

import "./Offers.css";

export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 3;

  // Verificar se a tela é mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    // Verificar no carregamento inicial
    checkIfMobile();
    
    // Adicionar listener para mudanças de tamanho
    window.addEventListener('resize', checkIfMobile);
    
    // Limpar listener ao desmontar
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Função para ir para um slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Função para avançar automaticamente os slides
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4500); // Muda a cada 5 segundos
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section data-section-id="FUNCIONALIDADES" data-section-redirect="#offers" className="offers" id="offers">
      <h3 className="offers__top__footnote footnote">
        Facilitando o acesso aos seus <br /> direitos
      </h3>
      <h1 className="offers__title">
        <hr className="offers__title__hr" />
        <span className="offers__title__innerText"> Tudo em um só lugar </span>
        <hr className="offers__title__hr" />
      </h1>
      <div className="wrapper">
        {isMobile ? (
          <>
            <div className="impacts">
              <div 
                className="impacts-container" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="impact">
                  <LucideTvMinimalPlay className="impact__icon--play icon" size={60} />
                  <p>Um sistema de fácil acesso e acessível a qualquer público</p>
                </div>
                <div className="impact">
                  <ZapIcon className="icon" height={60} />
                  <p>Redução das filas e burocracia nos processos de seus direitos</p>
                </div>
                <div className="impact">
                  <ContactRound className="impact__icon--contact icon" size={60} />
                  <p>Focado em oferecer a melhor expériência para os usuários</p>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              {[...Array(totalSlides)].map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </>
        ) : (
          <div className="impacts">
            <div className="impact">
              <LucideTvMinimalPlay className="impact__icon--play icon" size={60} />
              <p>Um sistema de fácil acesso e acessível a qualquer público</p>
            </div>
            <div className="impact">
              <ZapIcon className="icon" height={60} />
              <p>Redução das filas e burocracia nos processos de seus direitos</p>
            </div>
            <div className="impact">
              <ContactRound className="impact__icon--contact icon" size={60} />
              <p>Focado em oferecer a melhor expériência para os usuários</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}