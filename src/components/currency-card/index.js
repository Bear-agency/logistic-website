import React from 'react';
import { styles } from './styles';

const CurrencyCard = ({ currencyCode, amount }) => {
  const flagSrc = `/flags/${currencyCode}.svg`;

  return (
    <div style={styles.card}>
      <img src={flagSrc} alt={`${currencyCode} flag`} style={styles.flag} />
      <div style={styles.info}>
        <span style={styles.code}>{currencyCode}</span>
        <span style={styles.amount}>{amount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
