import React from 'react';
import * as styles from './styles';

const TextIconButton = ({ label, Icon, onClick }) => {
  return (
    <button onClick={onClick} style={styles.textIconButton}>
      {Icon && <Icon size={16} style={styles.icon} />}
      <span>{label}</span>
    </button>
  );
};

export default TextIconButton;
