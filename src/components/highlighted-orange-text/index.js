import React from 'react';
import * as styles from './styles';

const HighlightedOrangeText = ({ children,icon: Icon }) => {
  

  return <span style={styles.style}>
      {Icon && <Icon size={14} />}
      {children}
    </span>;
};

export default HighlightedOrangeText;
