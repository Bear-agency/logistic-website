import React from 'react';
import * as styles from './styles';

const HighlightedBlueText = ({ children,icon: Icon }) => {
  

  return <span style={styles.style}>
      {Icon && <Icon size={14} />}
      {children}
    </span>;
};

export default HighlightedBlueText;
