import React from 'react';

import Header from './Components/Header/Header';

// CSS
import './styleApp.css';
import Global from './Components/Global/globalCss'; // Global CSS componente
import './index.css';
import Nav from './Navigation';

export default function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full p-8  ">
        <Global />
        <Header />
      </div>
      <div className="gameScreen">
        <Nav />
      </div>
    </div>

  );
}
