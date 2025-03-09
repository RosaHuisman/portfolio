import React from 'react'
import './style.scss';
import Intro from '../Intro';
import Experience from '../Experience';
import Stack from '../Stack';


function App() {
  
  return (
    <div className="app">  	
      <Intro />
      <Experience />
      <Stack />
    </div>
  );
}

export default App;