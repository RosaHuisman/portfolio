import React from 'react'
import './style.scss';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Intro from '../../containers/Intro'
import Header from '../../components/Header'
import Experience from '../../components/Experience'



function App() {

  return (
    <div className="app">
      <BrowserRouter>
        	<Switch>
        		<Route path="/">
              <Header />
              <Intro />
        		</Route>
        		<Route path="/experience">
        			<Experience />
        		</Route>
        	</Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;