import React, { useState } from 'react';
import * as styles from './styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ToggleCollapseButton = ({ label = 'Подробнее', width = 'auto' }) => {
  const [collapsed, setCollapsed] = useState(false);

  const buttonStyle = collapsed
    ? { ...styles.buttonOutlined, width }
    : { ...styles.button, width };

  return (
    <button
      onClick={() => setCollapsed(!collapsed)}
      style={{ ...buttonStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {collapsed ? 'Свернуть' : label}
      {collapsed ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
};

export default ToggleCollapseButton;
