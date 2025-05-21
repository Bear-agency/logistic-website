import React from 'react';
import * as styles from './styles';

const BlackText = ({ children, icon: Icon, size = '12px' }) => {
  return (
    <span style={{ ...styles.style, fontSize: size }}>
      {Icon && <Icon size={parseInt(size, 10)} />}
      {children}
    </span>
  );
};

export default BlackText;
