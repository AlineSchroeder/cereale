import React from 'react';
import './Supplement.css';
import FundoSuplWebP from '../../assets/FundoSupl.svg';
import FundoBrancoWebP from '../../assets/FundoBranco.webp';

const Supplement = () => {
  // Estilo para o lado esquerdo (texto com fundo branco)
  const textSideBackgroundStyle = {
    backgroundImage: `url(${FundoBrancoWebP})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  // Estilo para o lado direito (imagem principal do suplemento)
  const imageSideBackgroundStyle = {
    backgroundImage: `url(${FundoSuplWebP})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
  };

  return (
    <section id="supplements" className="supplement-section">
      <div className="supplement-text-side" style={textSideBackgroundStyle}>
        <div className="supplement-description-container">
          <h2>Suplementos Naturais</h2>
          <p>
            Equilibre seu corpo com o melhor da nutrição consciente.
            Nossa linha de suplementos naturais foi selecionada para apoiar sua saúde de forma segura, eficaz e sem excessos. São produtos pensados para complementar sua rotina com ingredientes puros, sem aditivos químicos desnecessários, e com origem confiável.
          </p>
          <p>O que você encontra por aqui:</p>
          <ul>
            <li>• <strong>Proteínas vegetais</strong> (ervilha, arroz, mix vegetal) para quem busca energia e ganho de massa de forma natural.</li>
            <li>• <strong>Vitaminas e minerais essenciais</strong> para o bom funcionamento do corpo e reforço da imunidade.</li>
            <li>• <strong>Suplementos antioxidantes</strong>, como spirulina, chlorella e cúrcuma em cápsulas.</li>
            <li>• <strong>Ômega 3 vegetal</strong> e outros óleos funcionais em cápsulas.</li>
            <li>• <strong>Fibras naturais</strong> para melhorar o funcionamento intestinal e promover saciedade.</li>
          </ul>
          <p className="supplement-final-phrase">Aqui, você tem acesso a uma nutrição limpa, responsável e alinhada com um estilo de vida saudável.</p>
        </div>
      </div>
      {/* Aplica o estilo aqui - a tag 'style' já existia, só mudei o valor */}
      <div className="supplement-image-side" style={imageSideBackgroundStyle}>
      </div>
    </section>
  );
};

export default Supplement;
