import React from 'react';
import { Calendar } from 'lucide-react';
import * as styles from './styles';

const DatePicker = ({ value, onChange, width }) => {
  return (
    <div
      style={{
        ...styles.datePickerWrapper,
        width: width || '100%', // ширина по умолчанию — 100%, если не передана
      }}
    >
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={styles.dateInput}
      />
    </div>
  );
};

export default DatePicker;
