import React, { useState } from 'react';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import InputField from '../../components/input-field';
import { useNavigate } from 'react-router-dom';
import Footer from '../../blocks/footer';
import Header from '../../blocks/header';
import * as styles from './styles';

const RegisterPagePassword = () => {
  const [phone] = useState('');
    const navigate = useNavigate();

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={2} />
      <h2 style={styles.title}>Укажите пароль</h2>
      <p style={styles.subtitle}>Этот пароль Вам понадобится для входа в систему</p>

    <div style={styles.field}>
        <label style={styles.label}>Подсказка</label>
        <InputField placeholder="Введите пароль" width="100%" height="44px" />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Подсказка</label>
        <InputField placeholder="Повторите пароль" width="100%" height="44px" />
      </div>

      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Далее" onClick={() => navigate('/step-three')} />
      </div>

     
    </div>
        <Footer/>
    </div>
  );
};

export default RegisterPagePassword;
