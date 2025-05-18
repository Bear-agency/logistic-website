import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import ButtonEmpty from '../../components/button-empty';
import PhoneInput from '../../components/phone-input';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import * as styles from './styles';

const RegisterPageStepOne = () => {
   const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={1} />
      <h2 style={styles.title}>Создайте аккаунт</h2>
      <p style={styles.subtitle}>Для начала понадобится только номер телефона</p>

      <div style={styles.field}>
        <label style={styles.label}>Номер телефона</label>
        <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Получить код" onClick={() => navigate('/step-one-code')} />
      </div>

      <div style={styles.footer}>
        <p>Уже зарегистрированы?</p>
        <ButtonEmpty label="Вход" onClick={() => navigate('/login')} />
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default RegisterPageStepOne;
