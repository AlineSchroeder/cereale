import React, { useState, useEffect } from 'react';
import './Home.css';
import logoCereale from '../../assets/LogoCereale.svg';
import FundoHome from '../../assets/FundoHome.webp';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const homeRef = React.useRef(null);

  useEffect(() => {
    const updateContainerSize = () => {
      if (homeRef.current) {
        setContainerSize({
          width: homeRef.current.offsetWidth,
          height: homeRef.current.offsetHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    const handleMouseMove = (event) => {
      if (homeRef.current) {
        const { left, top } = homeRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - left,
          y: event.clientY - top,
        });
      }
    };

    if (homeRef.current) {
      homeRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', updateContainerSize);
      if (homeRef.current) {
        homeRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const sensitivity = 0.02;
  const offsetX = (mousePosition.x / containerSize.width - 0.5) * -1 * sensitivity * 100;
  const offsetY = (mousePosition.y / containerSize.height - 0.5) * -1 * sensitivity * 100;

  // Estilos dinâmicos para o fundo
  const backgroundStyle = {
    backgroundImage: `url(${FundoHome})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: `translate(${offsetX}%, ${offsetY}%)`,
    transition: 'transform 0.1s ease-out',
    width: '105%',
    height: '105%',
    position: 'absolute',
    top: '-2.5%',
    left: '-2.5%',
    zIndex: 0,
  };

  return (
    <section ref={homeRef} className="home-hero-section">
      
      <div className="interactive-background" style={backgroundStyle}></div>

      <div className="home-content-wrapper">
        <nav className="main-nav">
          <ul>
            <li><a href="#about">SOBRE NÓS</a></li>
            <li className="separator">|</li>
            <li><a href="#products">PRODUTOS NATURAIS</a></li>
            <li className="separator">|</li>
            <li><a href="#supplements">SUPLEMENTOS</a></li>
            <li className="separator">|</li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </nav>
        <div className="home-logo-container">
          <img src={logoCereale} alt="Logo Cereale Produtos Naturais" className="main-logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
