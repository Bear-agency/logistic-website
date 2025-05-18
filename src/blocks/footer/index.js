import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import * as styles from './styles';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer style={styles.footer}>
      {isOpen && (
        <div style={styles.footerContent}>
          <div style={styles.column}>
             <div style={styles.logoBlock}>
              <img src="/logo.png" alt="Logo" style={styles.logo} />
                 <div>
                   <strong>Yangi Osiyo<br />Logistikasi</strong>
                 </div>
               </div>
                <p>Name Company<br />Adress Company<br />City Company</p>
            <div style={styles.socialIcons}>
              <FaFacebookF style={styles.icon} />
              <FaInstagram style={styles.icon} />
              <FaLinkedinIn style={styles.icon} />
            </div>
          </div>

          <div style={styles.column}>
            <strong>Компания</strong>
            <p>О компании</p>
            <p>Контакты</p>
            <p>Вопросы и ответы</p>
            <p>Поддержка</p>
          </div>

          <div style={styles.column}>
            <strong>Условия и политика</strong>
            <p>Политика cookie</p>
            <p>Условия использования</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      )}

      <div style={styles.footerBottom}>
        <p>
          © 2025 NameCompany. All rights reserved. Design by nikitich.  
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={styles.arrowButton}
          aria-label="Toggle footer"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
