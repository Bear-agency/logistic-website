import React, { useState } from 'react';
import ButtonEmpty from '../../components/button-empty';
import ButtonShaded from '../../components/button-shaded';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
 const [selectedLang, setSelectedLang] = useState('uz');
 const navigate = useNavigate();

  return (
    <div style={styles.headerContainer}>
      <div style={styles.logoSection}>
        <img src="/logo.png" alt="logo" style={styles.logo} />
        <div style={styles.logoText}>
          <div><strong>Yangi Osiyo</strong></div>
          <div><strong>Logistikasi</strong></div>
        </div>
      </div>

      <div style={styles.actions}>
        <ButtonEmpty label="Вход" onClick={() => navigate('/login')} width="100px" />
        <ButtonShaded label="Регистрация" onClick={() => navigate('/step-one')} width="220px" />
        
        <div style={styles.languageSelector}>
          <img
            src={`/flags/${selectedLang}.svg`}
            alt="lang"
            style={styles.flagIcon}
          />
          <select
            value={selectedLang}
           onChange={(e) => setSelectedLang(e.target.value)}
            style={styles.langDropdown}
          >
            <option value="uz">🇺🇿</option>
            <option value="ru">🇷🇺</option>
            <option value="en">🇬🇧</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
