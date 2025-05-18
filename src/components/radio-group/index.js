import React, { useState } from 'react';
import * as styles from './styles';

const RadioGroup = ({ label, options = [], name, onChange }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div style={styles.radioGroupWrapper}>
      {label && <div style={styles.label}>{label}</div>}
      {options.map((option) => (
        <label key={option.value} style={styles.radioItem}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
            style={styles.radioInput}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
