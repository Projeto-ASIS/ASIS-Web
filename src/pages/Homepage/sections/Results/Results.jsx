import './Results.css'

import { ArrowLeft, ArrowRight } from "lucide-react"

import { useState, useEffect } from 'react';

export default function Results() {
  const items = [
    { id: 1, url: './images/imageslider.jpg' },
    { id: 2, url: './images/imageslider.jpg' },
    { id: 3, url: './images/imageslider.jpg' },
    { id: 4, url: './images/imageslider.jpg' },
    { id: 5, url: './images/imageslider.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    updateClasses();
  }, [currentIndex]);

  const updateClasses = () => {
    const itemsElements = document.querySelectorAll('.carousel-item');
    const dotsElements = document.querySelectorAll('.dot');

    itemsElements.forEach((item, index) => {
      item.classList.remove('active', 'prev', 'next');
      if (index === currentIndex) {
        item.classList.add('active');
      } else if (index === (currentIndex - 1 + items.length) % items.length) {
        item.classList.add('prev');
      } else if (index === (currentIndex + 1) % items.length) {
        item.classList.add('next');
      }
    });

    dotsElements.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id='results'>
      <div className="results__title">
        <h3 className="results__footnote text-blue footnote">Abaixo estão os nossos </h3>
        <div className="title__lines">
          <div className="line">.</div>
          <h1 className="text-pink">resultados</h1>
          <div className="line">.</div>
        </div>

      </div>
      <div className="slider">
        <div className="carousel-container">
          <div className="carousel">
            {items.map((item) => (
              <article
                key={item.id}
                className="carousel-item"
                style={{ backgroundImage: `url(${item.url})` }}
              ></article>
            ))}
          </div>


          <ul className="dots-container">
            <button className="nav-button-slider" id="prev" onClick={prev}>
              <ArrowLeft />
            </button>
            {items.map((_, index) => (
              <li
                key={`Dots_${index}`}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></li>
            ))}
            <button className="nav-button-slider" id="next" onClick={next}>
              <ArrowRight />
            </button>
          </ul>
        </div>
      </div>
    </section>
  )
}