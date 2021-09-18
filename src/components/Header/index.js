import React from 'react'
import './style.scss';

import { Dropdown } from 'semantic-ui-react';

import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
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
            <Dropdown.Menu className="header__firstsection__dropdownmenu">
              <Dropdown.Item text='Accueil' className="header__firstsection__dropdownelement"/>
              <Dropdown.Item text='Expérience' className="header__firstsection__dropdownelement" />
              <Dropdown.Item text='Formation' className="header__firstsection__dropdownelement" />
              <Dropdown.Item text='Projets' className="header__firstsection__dropdownelement"/>
              <Dropdown.Item text='Contact' className="header__firstsection__dropdownelement" />
            </Dropdown.Menu>
          </Dropdown>

          <div className="header__firstsection__social">
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-github"><i className="fa fa-github-alt"></i></a>
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-email"><i className="fa fa-envelope"></i></a>
              <a href="http://scripteden.com/download/eden-ui/" target="_blank" rel="noreferrer" className="btn-social btn-linkedin"><i className="fa fa-linkedin"></i></a>

          </div>

          </div>

          <div className="header__secondsection"> 
            <h1 className="header__secondsection__name"> Rosa Huisman </h1>
            
            <div className="header__secondsection__textanimation" > 
              <div className="header__secondsection__textanimation__iam"> Je suis&nbsp; </div>
              <TextTransition
              text={ TEXTS[index % TEXTS.length] }
              springConfig={ presets.wobbly }
              className="header__secondsection__textanimation__designation"
              />
            </div>


            
          </div>

          
           
          

        </div>
       
  );
}



export default Header;