import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Login,  RegisterPageStepOne, RegisterPageConfirmCode, RegisterPagePassword, RegisterPageStepFour, RegisterPageStepTree, Test, AddCargo, AddCar, RouteSearchPage, ResultsSearchPage} from './pages';

const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/step-one" element={<RegisterPageStepOne />} />
        <Route path="/step-one-code" element={<RegisterPageConfirmCode />} />
        <Route path="/step-two" element={<RegisterPagePassword />} />
        <Route path="/step-three" element={<RegisterPageStepTree />} />
        <Route path="/step-four" element={<RegisterPageStepFour />} />
        <Route path="/add-cargo" element={<AddCargo />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/search-route" element={<RouteSearchPage />} />
        <Route path="/results-route" element={<ResultsSearchPage />} />
      </Routes>
    </div>

  );
};

export default App;
