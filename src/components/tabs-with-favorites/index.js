import React, { useState } from 'react';
import FavoriteButton from '../favorite-button';
import * as styles from './styles';

const TabsWithFavorites = ({ tabs = ['Новый поиск', 'Tab'] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div style={styles.container}>
      <div style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      <FavoriteButton isActive={false} onClick={() => console.log('Избранное')} />
    </div>
  );
};

export default TabsWithFavorites;
