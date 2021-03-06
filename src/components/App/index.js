import React from 'react'
import './style.scss';

import { Route, Switch } from 'react-router-dom';

import Intro from '../../containers/Intro'
import Header from '../../components/Header'
import Experience from '../../containers/Experience'
import Formation from '../../components/Formation'
import Contact from '../../containers/Contact'


function App() {
  
  return (
   
    <div className="app">
      
        	<Switch>
        		<Route path="/" exact >
              <Header />
              <Intro />
        		</Route>
        		<Route path="/experience" exact >
              <Header />
              <Experience />
            </Route>
            <Route path="/formation" exact >
              <Header />
              <Formation />
            </Route>
            <Route path="/contact" exact >
              <Header />
              <Contact />
            </Route>
        		
        	</Switch>
    </div>
  );
}

export default App;