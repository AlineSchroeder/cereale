import React from 'react';
import './Header.css'; 

import instagramIcon from '../../assets/instagram.svg';
import whatsappIcon from '../../assets/whatsapp.svg';
import mapsIcon from '../../assets/maps.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="social-icons">
        <a href="https://www.instagram.com/cerealecuritiba/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="icon" />
        </a>
        <a href="https://wa.me/5541996152688" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="icon" />
        </a>
        <a href="https://maps.app.goo.gl/UB8vwfG7gwqFf5Bj7" target="_blank" rel="noopener noreferrer">
          <img src={mapsIcon} alt="Localização" className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
