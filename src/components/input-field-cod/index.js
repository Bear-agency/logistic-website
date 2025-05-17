import React from 'react';
import * as styles from './styles';

const InputFieldCod = ({
  placeholder = '0',
  width = '60px',
  height = '60px',
  type = 'text',
  onChange,
  value
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{ ...styles.inputField, width, height }}
    />
  );
};

export default InputFieldCod;
