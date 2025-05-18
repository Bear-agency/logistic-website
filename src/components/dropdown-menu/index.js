import React, { useState } from 'react';
import * as styles from './styles';

const DropdownMenu = ({ options = [], placeholder = 'Text dropdown menu', onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div style={styles.dropdown}>
      <div onClick={toggleDropdown} style={styles.selector}>
        <span>{selected}</span>
        <svg
          style={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 8L10 12L14 8"
            stroke="#6b7280"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <div style={styles.menu}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              style={styles.option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
