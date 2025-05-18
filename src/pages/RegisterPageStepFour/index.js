import React, { useState } from 'react';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import { CheckCircle } from 'lucide-react';
import Header from '../../components/header';
import * as styles from './styles';

const RegisterPageStepFour = () => {
  const [phone] = useState('');

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={4} />
      <CheckCircle size={48} color="#22C55E" strokeWidth={2.5} style={styles.checkcircle}/>
      <h2 style={styles.title}>Поздравляем!</h2>
      <p style={styles.subtitle}>Регестрация пройдена успешно! Теперь Вы можете перейти в личный кабинет и начать работу.</p>

      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Перейти в личный кабинет" onClick={() => console.log(phone)} />
      </div>
    </div>
    </div>
  );
};

export default RegisterPageStepFour;
