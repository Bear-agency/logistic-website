import React, { useState } from 'react';
import * as styles from './styles';

const countries = [
  { code: 'US', label: 'US', prefix: '+1' },
  { code: 'RU', label: 'RU', prefix: '+7' },
  { code: 'UA', label: 'UA', prefix: '+380' },
  { code: 'KZ', label: 'KZ', prefix: '+7' },
];

const PhoneInput = ({ value, onChange }) => {
  const [country, setCountry] = useState(countries[0]);

  return (
    <div style={styles.containerStyle}>
      <select
        value={country.code}
        onChange={(e) => {
          const selected = countries.find(c => c.code === e.target.value);
          setCountry(selected);
          onChange({ target: { value: selected.prefix + value.replace(/^\+\d+/, '') } });
        }}
        style={styles.selectStyle}
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>{c.label}</option>
        ))}
      </select>
      <input
        type="tel"
        placeholder={`${country.prefix} (555) 000-0000`}
        value={value}
        onChange={onChange}
        style={styles.inputStyle}
      />
    </div>
  );
};

export default PhoneInput;
