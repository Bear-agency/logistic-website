import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ButtonEmpty from '../../components/button-empty';
import ButtonShaded from '../../components/button-shaded';
import InputField from '../../components/input-field';
import Header from '../../components/header';
import AuthorizedHeader from '../../components/header-authorized';
import * as styles from './styles';

const Login = () => {
  const navigate = useNavigate(); // хук для перехода по роутам

  return (
    <div>
  <Header/> 
    <div style={styles.container}>
      <div style={styles.icon}>
        <FaSignInAlt size={32} color="#2d5ecf" />
      </div>
      <h2 style={styles.title}>Вход</h2>
      <p style={styles.subtitle}>
        Для логина используйте номер телефона, указанный при регистрации
      </p>

      <div style={styles.field}>
        <label style={styles.label}>Подсказка</label>
        <InputField placeholder="Введите логин" width="100%" height="44px" />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Подсказка</label>
        <InputField placeholder="Введите пароль" width="100%" height="44px" />
      </div>

      <div style={styles.buttonWrapper}>
        <ButtonShaded label="Войти" width="100%" onClick={() => {}} />
      </div>

      <div style={styles.footer}>
        <p>Еще не зарегистрированы?</p>
        <ButtonEmpty
          label="Регистрация"
          width="100%"
          onClick={() => navigate('/step-one')}
        />
      </div>
    </div>
    </div>
  );
};

export default Login;
