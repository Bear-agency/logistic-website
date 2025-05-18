import React from 'react';
import StepProgress from '../../components/step-progres';
import ButtonShaded from '../../components/button-shaded';
import InputField from '../../components/input-field';
import { useNavigate } from 'react-router-dom';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import * as styles from './styles';

const RegisterPageStepTree = () => {
      const navigate = useNavigate();
  return (
    <div>
    <Header/>
    <div style={styles.container}>
      <StepProgress steps={4} activeStep={3} />
      
      <h2 style={styles.title}>Заполните базовую информацию о себе</h2>
      <p style={styles.subtitle}>
        Эта информация необходима для идентификации Вас в системе. Каждое поле обязательно для заполнения
      </p>

      <div style={styles.form}>
        {/* Первая строка */}
        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>Подсказка</label>
            <InputField
              placeholder="ФИО или название предприятия"
              width="100%"
              height="44px"
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Подсказка</label>
            <InputField
              placeholder="Город проживания"
              width="100%"
              height="44px"
            />
          </div>
        </div>

        {/* Вторая строка */}
        <div style={styles.fieldFull}>
          <label style={styles.label}>Подсказка</label>
<InputField
  multiline
  placeholder="Прикрепите здесь копии документов, подтверждающие личность, или уставные документы предприятия"
  width="100%"
  height="200px"
/>
        </div>
      </div>

      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Завершить регистрацию" width="360px" onClick={() => navigate('/step-four')} />
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default RegisterPageStepTree;
