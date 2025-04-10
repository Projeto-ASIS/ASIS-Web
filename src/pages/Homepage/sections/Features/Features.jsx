import { useState, useEffect, useRef } from "react";
import { Brain, HousePlus, UserRoundCog, UserRoundPlus } from "lucide-react";

import './Features.css';

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const totalSlides = 4;

  // Configurações de swipe
  const minSwipeDistance = 50;

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

  // Funções de touch para swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Detectar direção do swipe
    if (isLeftSwipe) {
      // Swipe para esquerda = próximo slide
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (isRightSwipe) {
      // Swipe para direita = slide anterior
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Avançar automaticamente os slides a cada 5 segundos
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  // Array com os dados dos cards
  const cardsData = [
    {
      icon: <UserRoundCog className="features__icon" />,
      description: "Atualize seus dados do Cadunico com facilidade e eficácia sem mais perder tanto tempo, se modernize conosco",
      name: "Atualização cadastral"
    },
    {
      icon: <HousePlus className="features__icon" />,
      description: "Agende de maneira rápida o serviço da visita domiciliar do CRAS, nos horários disponíveis",
      name: "Agendamento de visita domiciliar"
    },
    {
      icon: <Brain className="features__icon" />,
      description: "Também consiga agendar o atendimento e apoio psicológico com alguns dos profissionais da assistência social",
      name: "Atendimento psicológico"
    },
    {
      icon: <UserRoundPlus className="features__icon" />,
      description: "Nosso sistema também te ajuda ao invés de ir até a central do CRAS para fazer seu CADÚnico, fazer tudo do conforto da sua casa",
      name: "CADÚnico"
    }
  ];

  return (
    <section data-section-id="BENEFÍCIOS" data-section-redirect="#features" className="#features" id="features">
      <div className="features__title">
        <h3 className="features__footnote footnote">Nossas funcionalidades</h3>
        <h1 className="text-blue title">O que te <span className="text-pink">Oferecemos?</span></h1>
      </div>
      <p className="features__description">Observe abaixo algumas das nossas funcionalidades</p>
      
      {isMobile ? (
        <div className="features-carousel-wrapper">
          <div 
            className="features__cards"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="features-carousel-container" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cardsData.map((card, index) => (
                <article className="card" key={index}>
                  {card.icon}
                  <p className="features__card__description">{card.description}</p>
                  <h4 className="features__card__name">{card.name}</h4>
                </article>
              ))}
            </div>
          </div>
          
          <div className="features-carousel-controls">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`features-carousel-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="features__cards">
          {cardsData.map((card, index) => (
            <article className="card" key={index}>
              {card.icon}
              <p className="features__card__description">{card.description}</p>
              <h4 className="features__card__name">{card.name}</h4>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}