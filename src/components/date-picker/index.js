import React from 'react';

import { Calendar } from 'lucide-react'; // или любая другая иконка
import * as styles from './styles';

const DatePicker = ({ value, onChange }) => {
  return (
    <div style={styles.datePickerWrapper}>
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
