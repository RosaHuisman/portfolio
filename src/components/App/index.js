import React from 'react'
import './style.scss';
import Intro from '../Intro';
import Experience from '../Experience';
import Stack from '../Stack';
import Links from '../Links';
import Formation from '../Formation';
import PlayRoom from '../PlayRoom';
import { Route, Switch } from 'react-router-dom';
import MemoryGame from '../MemoryGame';
import TicTacToe from '../TicTacToe';


function App() {
  
  return (
    <div className="app">  

    <Switch>
      <Route path="/" exact >
        <Intro />
        <Experience />
        <Stack />
        <Links />
        <Formation />
        <PlayRoom />
      </Route>
      <Route path="/memory" exact >
        <MemoryGame />
      </Route>
      <Route path="/tic-tac-toe" exact >
        <TicTacToe />
      </Route>
    </Switch>
    </div>
  );
}

export default App;