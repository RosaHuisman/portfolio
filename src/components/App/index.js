import React from 'react'
import './style.scss';

import Intro from '../../containers/Intro'
import Header from '../../components/Header'


function App() {

  return (
    <div className="app">
      <Header />
      <Intro />
    </div>
  );
}

export default App;