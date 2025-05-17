import React from 'react';
import * as styles from './styles';

const ButtonShaded = ({ label, onClick, type = 'button', width = '100%' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ ...styles.button, width }}
    >
      {label}
    </button>
  );
};

export default ButtonShaded;
