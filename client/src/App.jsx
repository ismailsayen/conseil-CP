import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Components/Loader/Loader';

import { } from "flowbite";
const App = () => {
  return (

    <div>
      <BrowserRouter>

        <Dashboard />
      </BrowserRouter>

    </div>
  );
};

export default App;