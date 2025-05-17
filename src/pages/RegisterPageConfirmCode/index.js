import React, { useState } from 'react';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import ButtonEmpty from '../../components/button-empty';
import InputFieldCod from '../../components/input-field-cod';
import * as styles from './styles';

const RegisterPageConfirmCode = () => {
  const [phone] = useState('');

  return (
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={1} />
      <h2 style={styles.title}>Введите код</h2>
      <p style={styles.subtitle}>На ваш номер (+1234567890) было отправлено сообщение с кодом подтвердения. Полученый код введите ниже </p>
      
     <div><InputFieldCod/> <InputFieldCod/> <InputFieldCod/> <InputFieldCod/></div>
      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Подтвердить" onClick={() => console.log(phone)} />
      </div>

      <div style={styles.footer}>
        <ButtonEmpty label="Изменить номер" onClick={() => {}} />
      </div>
    </div>
  );
};

export default RegisterPageConfirmCode;
