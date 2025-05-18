import React from 'react';
import { FaBullhorn, FaQuestionCircle, FaCog, FaEnvelope } from 'react-icons/fa';
import ButtonShaded from '../button-shaded';
import * as styles from './styles';

const menuItems = ['Пункт1', 'Пункт2', 'Пункт3', 'Пункт4'];

const AuthorizedHeader = () => {
  return (
    <div style={styles.authHeaderContainer}>
      <div style={styles.logoSection}>
        <img src="/logo.png" alt="logo" style={styles.logo} />
        <div style={styles.logoText}>
          <div><strong>Yangi Osiyo</strong></div>
          <div><strong>Logistikasi</strong></div>
        </div>
      </div>

      <div style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <div key={index} style={styles.menuItem}>{item}</div>
        ))}
      </div>

      <div style={styles.actions}>
        <ButtonShaded label="Создать заказ" onClick={() => {}} width="150px" />
        <FaBullhorn style={{ ...styles.icon, opacity: 0.3 }} />
        <FaQuestionCircle style={{ ...styles.icon, opacity: 0.3 }} />
        <FaCog style={{ ...styles.icon, opacity: 0.3 }} />
        <FaEnvelope style={{ ...styles.icon, opacity: 0.3 }} />
      </div>
    </div>
  );
};

export default AuthorizedHeader;
