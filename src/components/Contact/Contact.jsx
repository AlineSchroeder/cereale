import React from 'react';
import './Contact.css';
import LogoCereale from '../../assets/LogoCereale.svg';
import InstagramIcon from '../../assets/instagram.svg';
import WhatsAppIcon from '../../assets/whatsapp.svg';
import MapsIcon from '../../assets/maps.svg';


const Contact = () => {
  const mapAddress = "R. Primeiro de Maio, 994 - Xaxim, Curitiba - PR, 81810-000";

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.82578502591!2d-49.27137392367252!3d-25.441865977583647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4433d7d7b6b%3A0xc39f2f814b7e8d72!2sR.%20Primeiro%20de%20Maio%2C%20994%20-%20Xaxim%2C%20Curitiba%20-%20PR%2C%2081810-000!5e0!3m2!1spt-BR!2sbr!4v1719163012122!5m2!1spt-BR!2sbr"; 

  return (
    <section id="contact" className="contact-section">
      {/* Cabeçalho */}
      <div className="contact-header">
        <h1>Venha nos Conhecer</h1>
      </div>

      {/* Seção do Mapa com Fundo Parallax */}
      <div className="contact-map-parallax-wrapper">
        <div className="contact-map-overlay">
          <div className="contact-map-iframe-wrapper">
            <iframe
              src={googleMapsEmbedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cerealê Curitiba"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={LogoCereale} alt="Logo Cerealê" className="footer-logo" />
          </div>

          <div className="footer-right">
            <p className="contact-info address-line">
              <img src={MapsIcon} alt="Ícone Localização" className="contact-icon" />
              <a
                href="https://maps.app.goo.gl/UB8vwfG7gwqFf5Bj7"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                Rua Primeiro de Maio, 994 - Xaxim – Curitiba/PR
              </a>
            </p>

            <div className="social-links-container">
              <a
                href="https://www.instagram.com/cerealecuritiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <img src={InstagramIcon} alt="Ícone Instagram" className="social-icon" />
                @cerealecuritiba
              </a>
              <a
                href="https://wa.me/5541996152688"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <img src={WhatsAppIcon} alt="Ícone WhatsApp" className="social-icon" />
                (41) 99615-2688
              </a>
            </div>
          </div>
        </div>

        <p className="copyright-info">
          © {new Date().getFullYear()} Cereale. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
