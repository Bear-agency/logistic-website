import React from 'react';
import InputField from '../../components/input-field';
import * as styles from './styles';

const AdditionalInfoBlock = ({ value, onChange }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.title}>Дополнительная информация</p>
        <p style={styles.subtitle}>
          Укажите необходимую дополнительную информацию
        </p>
      </div>
      <hr style={styles.divider} />
      <InputField
        multiline
        placeholder="введите текст"
        width="100%"
        height="120px"
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

export default AdditionalInfoBlock;
