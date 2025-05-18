import React from 'react';
import PriceInput from '../../components/price-input';
import DropdownMenu from '../../components/dropdown-menu';
import InputField from '../../components/input-field';
import * as styles from './styles';
const PaymentInfoBlock = ({
  price,
  onPriceChange,
  currency,
  onCurrencyChange,
  paymentForm,
  onPaymentFormChange,
  paymentTerm,
  onPaymentTermChange,
  paymentOptions, // добавь этот пропс при использовании компонента
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.title}>Информация об оплате</p>
        <p style={styles.subtitle}>Укажите информацию о стоимости и форме оплаты</p>
      </div>

      <div style={styles.paymentRow}>
        <div style={styles.inputItem}>
          <label style={styles.label}>Стоимость</label>
          <PriceInput
            value={price}
            width="100%"
            height="40px"
            onChange={onPriceChange}
            currency={currency}
            onCurrencyChange={onCurrencyChange}
            currencies={['USD', 'EUR', 'UAH']}
          />
        </div>

        <div style={styles.inputItem}>
          <label style={styles.label}>Форма оплаты</label>
          <DropdownMenu
            width="100%"
            height="20px"
            options={paymentOptions}
            placeholder="выберите форму оплаты"
            onSelect={onPaymentFormChange}
          />
        </div>

        <div style={styles.inputItemWide}>
          <label style={styles.label}>Сроки оплаты</label>
          <InputField
            value={paymentTerm}
            onChange={onPaymentTermChange}
            placeholder="укажите сроки"
            width="100%"
            height="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoBlock;
