import React from 'react';
import * as styles from './styles';

const HighlightedText = ({ children }) => {
  

  return <span style={styles.style}>{children}</span>;
};

export default HighlightedText;
