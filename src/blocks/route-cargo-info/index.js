// RouteCargoInfo.jsx
import React, { useState } from 'react';
import DropdownMenu from '../../components/dropdown-menu';
import RadioGroup from '../../components/radio-group';
import InputField from '../../components/input-field';
import * as styles from './styles';

export function RouteCargoInfo() {
  const [cargoType, setCargoType] = useState('');
  const [loadType, setLoadType] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [width, setWidth] = useState('');
  const [volume, setVolume] = useState('');
  const [quantity, setQuantity] = useState('');
  const [height, setHeight] = useState('');
  const [loadOption, setLoadOption] = useState('none');

  const typeOptions = [
    { label: 'Тип 1', value: 'type1' },
    { label: 'Тип 2', value: 'type2' },
  ];
  const loadOptions = [
    { label: 'Загрузка 1', value: 'load1' },
    { label: 'Загрузка 2', value: 'load2' },
  ];
  const vehicleOptions = [
    { label: 'Авто 1', value: 'auto1' },
    { label: 'Авто 2', value: 'auto2' },
  ];

  return (
    <div>
      <p style={styles.title}>Информация о грузе</p>
      <p style={styles.subtitle}>
        Укажите как можно подробнее доступную информацию о грузе
      </p>

      <div style={styles.grid}>
        {/* кол-во колонок: первые 3 — поля, 4я — радиогруппа */}

        <div>
            <div style={styles.marginBlock}>
          <label style={styles.fieldLabel}>Тип груза</label>
          <DropdownMenu
            {...styles.dropdownWidth}
            options={typeOptions}
            placeholder="Выберите тип"
            onSelect={setCargoType}
          />
          </div>
          <div style={styles.marginBlock}>
           <label style={styles.fieldLabel}>Вес груза</label>
          <InputField
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Укажите вес"
            {...styles.fullWidth}
          />
          </div>
          <div style={styles.marginBlock}>
          <label style={styles.fieldLabel}>Объём груза</label>
          <InputField
            value={volume}
            onChange={e => setVolume(e.target.value)}
            placeholder="Укажите объём"
            {...styles.fullWidth}
          />
          </div>
        </div>



        <div>
            <div style={styles.marginBlock}>
          <label style={styles.fieldLabel}>Тип загрузки</label>
          <DropdownMenu
            {...styles.dropdownWidth}
            options={loadOptions}
            placeholder="Выберите тип"
            onSelect={setLoadType}
          />
          </div>
          <div style={styles.marginBlock}>
           <label style={styles.fieldLabel}>Тип автомобиля</label>
          <DropdownMenu
            {...styles.dropdownWidth}
            options={vehicleOptions}
            placeholder="Выберите тип"
            onSelect={setVehicleType}
          />
          </div>
          <div style={styles.marginBlock}>
           <label style={styles.fieldLabel}>Количество автомобилей</label>
          <InputField
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Укажите количество"
            {...styles.fullWidth}
          />
          </div>
        </div>

        <div>
            <div style={styles.marginBlock}>
          <label style={styles.fieldLabel}>Длина груза</label>
          <InputField
            value={length}
            onChange={e => setLength(e.target.value)}
            placeholder="Укажите длину"
            {...styles.fullWidth}
          />
          </div>
          <div style={styles.marginBlock}>
          <label style={styles.fieldLabel}>Ширина груза</label>
          <InputField
            value={width}
            onChange={e => setWidth(e.target.value)}
            placeholder="Укажите ширину"
            {...styles.fullWidth}
          />
          </div>
          <div style={styles.marginBlock}>
           <label style={styles.fieldLabel}>Высота груза</label>
          <InputField
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="Укажите высоту"
            {...styles.fullWidth}
          />
          </div>
        </div>


        {/* Радиогруппа справа */}
        <div>
          <RadioGroup
            label="Возможность догруза"
            name="loadOption"
            options={[
              { label: 'Без догрузки', value: 'none' },
              { label: 'Догрузка', value: 'full' },
              { label: 'Возможна догрузка', value: 'possible' },
            ]}
            selectedValue={loadOption}
            onChange={setLoadOption}
          />
        </div>
      </div>
        <hr style={styles.divider} />
    </div>
  );
}


