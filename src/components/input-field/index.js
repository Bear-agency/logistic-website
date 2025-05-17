import React from 'react';
import * as styles from './styles';

const InputField = ({
  placeholder = 'Введите текст',
  width = '300px',
  height = '40px',
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

export default InputField;
