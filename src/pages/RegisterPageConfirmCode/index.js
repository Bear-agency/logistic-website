import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import ButtonEmpty from '../../components/button-empty';
import InputFieldCod from '../../components/input-field-cod';
import Header from '../../components/header';
import * as styles from './styles';

const RegisterPageConfirmCode = () => {
  const navigate = useNavigate();
  const [phone] = useState('');

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={1} />
      <h2 style={styles.title}>Введите код</h2>
      <p style={styles.subtitle}>На ваш номер (+1234567890) было отправлено сообщение с кодом подтвердения. Полученый код введите ниже </p>
      
     <div><InputFieldCod/> <InputFieldCod/> <InputFieldCod/> <InputFieldCod/></div>
      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Подтвердить" onClick={() => navigate('/step-two')} />
      </div>

      <div style={styles.footer}>
        <ButtonEmpty label="Изменить номер" onClick={() => navigate('/step-one-code')} />
      </div>
    </div>
    </div>
  );
};

export default RegisterPageConfirmCode;
