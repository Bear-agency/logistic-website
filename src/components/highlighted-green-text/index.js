import React from 'react';
import * as styles from './styles';

const HighlightedGreenText = ({ children,icon: Icon }) => {
  

  return <span style={styles.style}>
      {Icon && <Icon size={14} />}
      {children}
    </span>;
};

export default HighlightedGreenText;
