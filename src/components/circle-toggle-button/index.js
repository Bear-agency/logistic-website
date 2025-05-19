import React, { useState } from 'react';
import * as styles from './styles';

const CircleToggleButton = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      style={{
        ...styles.circleButton,
        backgroundColor: active ? '#4267B2' : 'transparent',
        borderColor: '#4267B2',
      }}
    />
  );
};

export default CircleToggleButton;
