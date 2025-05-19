import Pagination from "../../components/pagination";
import RadioGroup from "../../components/radio-group";
import DatePicker from "../../components/date-picker";
import FavoriteButton from "../../components/favorite-button";
import TextIconButton from "../../components/button-text-icon";
import PriceInput from "../../components/price-input";
import AdditionalInfoBlock from "../../blocks/additional-info";
import PaymentInfoBlock from "../../blocks/payment-info";
import { RouteInfoBlock } from "../../blocks/route-info";
import { RouteCargoInfo } from "../../blocks/route-cargo-info";
import { TransportCargoInfo } from "../../blocks/transport-cargo-info";
import FilterBlock from "../../blocks/filter-block";
import { Plus, Trash } from 'lucide-react';
import React, { useState } from 'react';

const Test = () => {
const [date, setDate] = useState('2025-10-27');
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState('');

  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
   <FilterBlock/>
    </div>
    
  );
};

export default Test;
