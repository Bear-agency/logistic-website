import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as styles from './styles';

const SearchInput = ({ placeholder = 'Поиск', onSearch, Width ="350px" }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <div style={{...styles.searchContainer, width: Width}}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={styles.searchInput}
      />
      <button onClick={handleSearch} style={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchInput;
