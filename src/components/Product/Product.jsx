import React from 'react';
import './Product.css';

import FundoProductWebP from '../../assets/FundoProduct.svg'; // Mantido inline apenas no lado direito

const Product = () => {
  // Estilo apenas para o lado direito (imagem do produto)
  const productRightBackgroundStyle = {
    backgroundImage: `url(${FundoProductWebP})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
  };

  return (
    <section id="products" className="product-section">
      <div className="product-content-right" style={productRightBackgroundStyle}></div>

      <div className="product-content-left fundo-verde">
        <div className="product-description-container">
          <h2>Nossa Seleção de Produtos Naturais</h2>
          <p>
            Aqui você encontra uma seleção cuidadosa de produtos naturais e saudáveis, pensados para quem busca mais equilíbrio, bem-estar e vitalidade no dia a dia.
          </p>
          <p>Oferecemos:</p>
          <ul>
            <li>• <strong>Grãos e Cereais Integrais</strong> como quinoa, chia, aveia e linhaça, ideais para uma alimentação rica em fibras e nutrientes.</li>
            <li>• <strong>Frutas Secas e Oleaginosas</strong> selecionadas, como castanhas, nozes, tâmaras e amêndoas, perfeitas para lanches nutritivos.</li>
            <li>• <strong>Óleos Naturais e Vinagres Funcionais</strong>, como óleo de coco e vinagre de maçã orgânico, aliados poderosos para a sua saúde.</li>
            <li>• <strong>Temperos e Especiarias Naturais</strong>, como cúrcuma e gengibre, que realçam o sabor e oferecem benefícios terapêuticos.</li>
            <li>• <strong>Produtos a Granel</strong>, incluindo mel puro, pastas integrais e geleias sem adição de açúcar.</li>
            <li>• <strong>Suplementos Naturais</strong>, como proteínas vegetais, vitaminas e minerais, para complementar sua rotina de forma saudável.</li>
            <li>• <strong>Cosméticos Naturais</strong>, feitos com ingredientes puros e sustentáveis, como sabonetes artesanais, óleos essenciais e cremes corporais.</li>
          </ul>
          <p className="product-final-phrase">Porque cuidar de si é um ato de amor. Permita-se viver o natural todos os dias com a gente.</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
