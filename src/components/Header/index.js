import React from 'react'
import './style.scss';

import { Dropdown } from 'semantic-ui-react';

import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
  " Rosa Huisman",
  " développeuse Junior",
  " développeuse FullStack",
  " développeuse Front-End"
];


const Header = () => {

  const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>
    setIndex(index => index + 1),
    3000 // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);

  return (
        <div className="header">
          <div className="header__firstsection"> 
      

          <Dropdown icon='bars' className="header__firstsection__dropdown">
            <Dropdown.Menu className="header__dropdownmenu">
              <Dropdown.Item text='Accueil' />
              <Dropdown.Item text='Expérience' />
              <Dropdown.Item text='Formation' />
              <Dropdown.Item text='Projets' />
              <Dropdown.Item text='Contact' />
            </Dropdown.Menu>
          </Dropdown>

          <div className="header__firstsection__social">
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-facebook"><i className="fa fa-facebook"></i></a>
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-github"><i className="fa fa-github-alt"></i></a>
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-email"><i className="fa fa-envelope"></i></a>
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-linkedin"><i className="fa fa-linkedin"></i></a>

          </div>
          
          </div>

          <div className="header__secondsection"> 

            
            <h1 className="header__secondsection__textanimation" > 
            Je suis&nbsp; 
            <TextTransition
            text={ TEXTS[index % TEXTS.length] }
            springConfig={ presets.wobbly }
            />
            </h1>


            
          </div>

          
           
          

        </div>
       
  );
}



export default Header;