
import React, { useState } from 'react';
import * as styles from './styles';

const Tabs = ()=> {
  const [active, setActive] = useState('gruz');

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.tab,
          ...(active === 'gruz' ? styles.activeTab : {}),
        }}
        onClick={() => setActive('gruz')}
      >
        Грузы
      </button>
      <button
        style={{
          ...styles.tab,
          ...(active === 'transport' ? styles.activeTab : {}),
        }}
        onClick={() => setActive('transport')}
      >
        Транспорты
      </button>
    </div>
  );
};

export default Tabs;