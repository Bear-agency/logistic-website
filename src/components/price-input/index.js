import React from 'react';
import * as styles from './styles';

const PriceInput = ({
  placeholder = '0',
  width = '50px',
  height = '30px',
  type = 'number',
  onChange,
  value,
  currency = 'USD',
  onCurrencyChange,
  currencies = ['USD', 'EUR', 'UAH']
}) => {
  return (
    <div style={{ ...styles.priceInputWrapper, width, height }}>
      <select
        value={currency}
        onChange={onCurrencyChange}
        style={styles.currencySelectLeft}
      >
        {currencies.map(cur => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={styles.priceInputFieldRight}
      />
    </div>
  );
};

export default PriceInput;
