import React from 'react'
import './style.scss';
import Intro from '../Intro';
import Experience from '../Experience';
import Stack from '../Stack';
import Links from '../Links';
import Formation from '../Formation';


function App() {
  
  return (
    <div className="app">  	
      <Intro />
      <Experience />
      <Stack />
      <Links />
      <Formation />
    </div>
  );
}

export default App;