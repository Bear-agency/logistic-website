import Pagination from "../../components/pagination";
import RadioGroup from "../../components/radio-group";
import DatePicker from "../../components/date-picker";
import FavoriteButton from "../../components/favorite-button";
import TextIconButton from "../../components/button-text-icon";
import PriceInput from "../../components/price-input";
import { Plus, Trash } from 'lucide-react';
import React, { useState } from 'react';

const Test = () => {
const [date, setDate] = useState('2025-10-27');
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState('');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
        <Pagination totalPages={10} />
        <DatePicker value={date} onChange={setDate} />

        <RadioGroup
          label="Test"
          name="loadOption"
          options={[
            { label: 'Test 1', value: 'none' },
            { label: 'Test 2', value: 'full' },
            { label: 'Test 3', value: 'possible' },]}
          onChange={(val) => console.log('Selected:', val)}
          />
          <FavoriteButton onClick={(state) => console.log('Active:', state)} />
        
<TextIconButton
  label="Добавить место загрузки"
  Icon={Plus}
  onClick={() => console.log('Добавить место')}
/>
<TextIconButton
  label="Удалить место загрузки"
  Icon={Trash}
  onClick={() => console.log('Удалить место')}
/>
    <PriceInput
      value={price}
      onChange={handlePriceChange}
      currency={currency}
      onCurrencyChange={handleCurrencyChange}
      currencies={['USD', 'EUR', 'UAH']}
    />


    </div>
    
  );
};

export default Test;
