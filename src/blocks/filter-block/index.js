import React from 'react';
import DatePicker from '../../components/date-picker';
import DropdownMenu from '../../components/dropdown-menu';
import ButtonShaded from '../../components/button-shaded';
import Tabs from '../../components/tabs';
import * as styles from './styles';

const FilterBlock = ({
  setMassFrom,
  setMassTo,
  setVolumeFrom,
  setVolumeTo,
  setTransportType,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  onSearch,
}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {/* Масса */}
      <div>
        <label style={styles.fieldLabel}>Масса</label>
        <div style={styles.inlineFields}>
          <DropdownMenu placeholder="от"  width="120px" onSelect={setMassFrom} height='20px' />
          <span style={styles.separator}>-</span>
          <DropdownMenu placeholder="до" width="120px" onSelect={setMassTo} height='20px' />
        </div>
      </div>

      {/* Объем */}
      <div>
        <label style={styles.fieldLabel}>Объем</label>
        <div style={styles.inlineFields}>
          <DropdownMenu placeholder="от" width="120px" onSelect={setVolumeFrom} height='20px'/>
          <span style={styles.separator}>-</span>
          <DropdownMenu placeholder="до" width="120px" onSelect={setVolumeTo} height='20px'/>
        </div>
      </div>

      {/* Тип транспорта */}
      <div>
        <DropdownMenu
          placeholder="Выберите тип транспорта"
          onSelect={setTransportType}
            width="260px"
          height='20px'
        />
      </div>

      {/* Таб переключатель */}
      <div>
        <Tabs  />
      </div>

      {/* Даты */}
      <div>
        <div style={styles.inlineFields}>
          <DatePicker
            value={dateFrom}
              width="160px"
            onChange={setDateFrom}
            placeholder="с"
          />
          <span style={styles.separator}>-</span>
          <DatePicker
            value={dateTo}
              width="160px"
            onChange={setDateTo}
            placeholder="по"
          />
        </div>
      </div>

      {/* Кнопка Найти */}
      <div>
        <ButtonShaded
          label="Найти"
          width="130px"
          onClick={onSearch || (() => console.log('Найти'))}
        />
      </div>
    </div>
  );
};

export default FilterBlock;
