import React from 'react'
import './style.scss';

import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
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

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(5);

  return (
        <div className="header" id="accueil">

          <div className="header__firstsection"> 

          <div>
              <button {...buttonProps} className="header__firstsection__dropdown">
                <div className="header__firstsection__dropdown__element"></div>
                <div className="header__firstsection__dropdown__secondelement"></div>
              </button>
              <div className={isOpen ? 'header__firstsection__dropmenu' : 'header__firstsection__dropmenu__close'} >
                  <a className="header__firstsection__dropmenu__element" {...itemProps[0]} href='/' >Accueil</a>
                  <a className="header__firstsection__dropmenu__element" {...itemProps[1]} href='/experience'>Expérience</a>
                  <a className="header__firstsection__dropmenu__element" {...itemProps[2]} href='www.google.fr'>Formation</a>
                  <a className="header__firstsection__dropmenu__element" {...itemProps[3]} href='www.google.fr'>Projets</a>
                  <a className="header__firstsection__dropmenu__element" {...itemProps[4]} href='www.google.fr'>Contact</a>
              </div>

          </div>

         

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