import React from 'react';
import * as styles from './styles'; // или замени на inline-стиль, если нужно

const IconToggleButton = ({
  icon: IconComponent,
  onClick,
  size = 24,
  color = '#4267B2',
  style = {},
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} style={{ ...styles.favoriteButton, ...style }}>
      {IconComponent && <IconComponent size={size} color={color} />}
    </button>
  );
};

export default IconToggleButton;

  