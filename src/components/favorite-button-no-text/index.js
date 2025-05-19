import React, { useState } from 'react';
import { Bookmark } from 'lucide-react'; // Флаг в стиле TikTok можно заменить здесь
import * as styles from './styles';

const FavoriteButtonNoText = ({ isActive = false, onClick }) => {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    const newState = !active;
    setActive(newState);
    onClick?.(newState);
  };

  return (
    <button onClick={handleClick} style={styles.favoriteButton}>
      <Bookmark
        size={24}
        color={active ? '#4267B2' : '#6B7280'}
        fill={active ? '#4267B2' : 'none'}
      />
    </button>
  );
};

export default FavoriteButtonNoText;
