import React from 'react';
import * as styles from './styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ToggleCollapseButton = ({ label = 'Подробнее', width = 'auto', onClick, isOpen = false }) => {
  const buttonStyle = isOpen
    ? { ...styles.buttonOutlined, width }
    : { ...styles.button, width };

  return (
    <button
      onClick={onClick}
      style={{ ...buttonStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {isOpen ? 'Свернуть' : label}
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
};

export default ToggleCollapseButton;
