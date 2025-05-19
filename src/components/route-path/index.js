import React from 'react';
import * as styles from './styles';

const RoutePath = ({ places }) => {
  return (
    <div>
      {places.map((place, index) => (
        <span key={index} style={styles.label}>
          {place}
          {index < places.length - 1 && ' → '}
        </span>
      ))}
    </div>
  );
};

export default RoutePath;
