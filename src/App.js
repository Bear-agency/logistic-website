import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Login,  RegisterPageStepOne, RegisterPageConfirmCode, RegisterPagePassword} from './pages';

const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/step-one" element={<RegisterPageStepOne />} />
        <Route path="/step-one-code" element={<RegisterPageConfirmCode />} />
        <Route path="/step-two" element={<RegisterPagePassword />} />
      </Routes>
    </div>

  );
};

export default App;
