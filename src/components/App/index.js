import React from 'react'
import './style.scss';

import { Route, Switch } from 'react-router-dom';


import Intro from '../../containers/Intro'
import Header from '../../components/Header'
import Experience from '../../components/Experience'



function App() {

  return (
    <div className="app">
        	<Switch>
        		<Route path="/" exact>
              <Header />
              <Intro />
        		</Route>
        		<Route path="/experience" exact >
              <Header />
              <Experience />
            </Route>
        			
        		
        	</Switch>
    </div>
  );
}

export default App;