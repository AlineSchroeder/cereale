// src/components/About/About.jsx

import React, { useState, useEffect } from 'react';
import './About.css';

// Importe a imagem de fundo aqui
import FundoBrancoWebP from '../../assets/FundoBranco.webp'; // Sua imagem otimizada .webp

import loja1 from '../../assets/About/Loja1.svg';
import loja2 from '../../assets/About/Loja2.svg';
import loja3 from '../../assets/About/Loja3.svg';


const images = [loja1, loja2, loja3];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Define o estilo de fundo dinâmico
  const backgroundStyle = {
    backgroundImage: `url(${FundoBrancoWebP})`, // Usa a imagem importada
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Mantém o efeito parallax
  };

  return (
    // Aplica o estilo inline à seção
    <section id="about" className="about-section" style={backgroundStyle}>
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre a Cereale Produtos Naturais</h2>
          <p>
            Desde <strong>2021</strong>, a Cereale Produtos Naturais tem sido um refúgio para quem busca uma vida mais saudável e equilibrada em Curitiba e região. Fundada com a paixão por oferecer o melhor da natureza, nossa loja se dedica a proporcionar produtos que nutrem o corpo e a alma.
          </p>
          <p>
            Na Cereale, a <strong>qualidade e o frescor são inegociáveis</strong>. Trabalhamos com um rigoroso controle de armazenamento para garantir que cada grão, castanha ou fruta seca chegue à sua mesa com o máximo de sabor e nutrientes. Nosso compromisso é com a excelência, desde a seleção dos fornecedores até a entrega final ao cliente.
          </p>
          <p>
            Mais do que uma loja, somos um espaço de acolhimento. Aqui, você será atendido pessoalmente pelo <strong>dono e sua esposa</strong>, que fazem questão de oferecer um atendimento <strong>atencioso e personalizado</strong>. Estamos sempre prontos para auxiliar, tirar dúvidas e compartilhar conhecimento sobre os benefícios de cada produto, ajudando você a fazer as melhores escolhas para sua saúde.
          </p>
          <p>
            Nosso mix de produtos vai muito além dos tradicionais naturais a granel. Temos uma <strong>ampla variedade de cápsulas de suplementos</strong>, ideais para complementar sua dieta, além de outros itens essenciais para um dia a dia mais saudável, como <strong>mel puro, vinagres especiais, deliciosas pastas de amendoim</strong> e muito mais. Venha descobrir a diversidade e os benefícios que a Cereale tem a oferecer para sua jornada de bem-estar.
          </p>
        </div>
        <div className="about-carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Loja Cereale - Imagem ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
