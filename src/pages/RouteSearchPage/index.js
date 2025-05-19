import React, { useState } from 'react';
import * as styles from './styles';
import FromWhere from '../../blocks/from-where';
import TextIconButton from '../../components/button-text-icon';
import FilterBlock from '../../blocks/filter-block';
import { Plus, Minus } from 'lucide-react';
import TabsWithFavorites from '../../components/tabs-with-favorites';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';

export function RouteSearchPage() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [massFrom, setMassFrom] = useState('');
  const [massTo, setMassTo] = useState('');
  const [volumeFrom, setVolumeFrom] = useState('');
  const [volumeTo, setVolumeTo] = useState('');

  const [fromPlaces, setFromPlaces] = useState([{}]);
  const [toPlaces, setToPlaces] = useState([{}]);

  const handleAddFromPlace = () => {
    setFromPlaces([...fromPlaces, {}]);
  };

  const handleAddToPlace = () => {
    setToPlaces([...toPlaces, {}]);
  };

  const handleRemoveFromPlace = (index) => {
    if (fromPlaces.length > 1) {
      setFromPlaces(fromPlaces.filter((_, i) => i !== index));
    }
  };

  const handleRemoveToPlace = (index) => {
    if (toPlaces.length > 1) {
      setToPlaces(toPlaces.filter((_, i) => i !== index));
    }
  };

  return (
    <div> <Header/>
    <h1 style={styles.header}>Найти грузы и транспорты</h1>
    <div style={styles.pageContainer}>
       
    <TabsWithFavorites/>
      <div style={styles.filtersGrid}>
        <div style={styles.filtersGrid}>
          <div>
            {fromPlaces.map((_, index) => (
              <div key={`from-${index}`} style={styles.inputWithRemove}>
                <FromWhere text={`Откуда`} />
                {fromPlaces.length > 1 && (
                  <TextIconButton
                    Icon={Minus}
                    onClick={() => handleRemoveFromPlace(index)}
                  />
                )}
              </div>
            ))}
            <TextIconButton
              label="Добавить место подачи"
              Icon={Plus}
              onClick={handleAddFromPlace}
            />
          </div>

          <div>
            {toPlaces.map((_, index) => (
              <div key={`to-${index}`} style={styles.inputWithRemove}>
                <FromWhere text={`Куда`} />
                {toPlaces.length > 1 && (
                  <TextIconButton
                   
                    Icon={Minus}
                    onClick={() => handleRemoveToPlace(index)}
                  />
                )}
              </div>
            ))}
            <TextIconButton
              label="Добавить место выгрузки"
              Icon={Plus}
              onClick={handleAddToPlace}
            />
          </div>
        </div>

        <FilterBlock />
      </div>
    </div>
    <Footer/>
    </div>
  );
}
