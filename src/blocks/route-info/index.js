// RouteInfoBlock.jsx
import React, { useState } from 'react';
import InputField from '../../components/input-field';
import DatePicker from '../../components/date-picker';
import TextIconButton from '../../components/button-text-icon';
import { Plus, Trash } from 'lucide-react';
import * as styles from './styles';

export function RouteInfoBlock() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [locations, setLocations] = useState(['']);
  const [unloadPlace, setUnloadPlace] = useState('');

  const addLocation = () => setLocations([...locations, '']);
  const removeLocation = idx =>
    setLocations(locations.filter((_, i) => i !== idx));
  const onLocationChange = (value, idx) => {
    const newLocs = [...locations];
    newLocs[idx] = value;
    setLocations(newLocs);
  };

  return (
    <div>
      <p style={styles.title}>Информация о маршруте</p>
      <p style={styles.subtitle}>
        Укажите информацию о днях загрузки, местах загрузки и выгрузки
      </p>

      <div style={styles.row}>
        {/* Даты */}

        <div >
          <label style={styles.dateLabel}>Дни загрузки</label>
          <div style={styles.dateRange}>
            <DatePicker
              value={dateFrom}
              onChange={setDateFrom}
              placeholder="с"

            />
            <span style={{ alignSelf: 'center' }}>—</span>
            <DatePicker
              value={dateTo}
              onChange={setDateTo}
              placeholder="по"
            />
          </div>
        </div>
        {/* Места загрузки */}
        <div style={styles.column}>
          {locations.map((loc, idx) => (
            <div key={idx} style={styles.locationWrapper}>
              <label style={styles.locationLabel}>
                Место загрузки {idx + 1}
              </label>
              <div style={styles.locationRow}>
                <InputField
                 width="100%"
                 height="40px"
                  value={loc}
                  onChange={e => onLocationChange(e.target.value, idx)}
                  placeholder=""
                  style={styles.inputWithIcon}
                />
                {idx > 0 && (
                  <Trash
                    size={16}
                    style={styles.deleteIcon}
                    onClick={() => removeLocation(idx)}
                  />
                )}
              </div>
            </div>
          ))}

          <TextIconButton
            label="Добавить место загрузки"
            Icon={Plus}
            onClick={addLocation}
            style={styles.buttonGroup}
          />
        </div>

        {/* Место выгрузки */}
        <div style={styles.column}>
          <label style={styles.locationLabel}>Место выгрузки</label>
          <InputField
            value={unloadPlace}
            onChange={e => setUnloadPlace(e.target.value)}
            placeholder=""
            width="100%"
            height="40px"
          />
          <p/>
          <TextIconButton
            label="Удалить место загрузки"
            Icon={Trash}
            onClick={() => console.log('Удалить место')}
            style={styles.buttonGroup}
          />
        </div>
      </div>
      <hr style={styles.divider} />
    </div>
  );
}

