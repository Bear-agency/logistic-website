
import React from 'react';
import * as styles from './styles';

const ButtonEmpty = ({ label, onClick, type = 'button', width = '100%' }) => {
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

export default ButtonEmpty;
