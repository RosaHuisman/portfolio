import React from 'react'
import './style.scss';

import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
  " développeuse Junior",
  " créative",
  " jeune diplômée",
  " rigoureuse",
  " développeuse Front-End",
  " autonome"
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
                  <a className="header__firstsection__dropmenu__element" {...itemProps[2]} href='/formation'>Formation</a>
                  <a className="header__firstsection__dropmenu__element" {...itemProps[4]} href='/contact'>Contact</a>
              </div>

          </div>

          <div className="header__firstsection__menudesktop">

            <a className="header__firstsection__menudesktop__link" href='/'>Accueil</a>
            <a className="header__firstsection__menudesktop__link" href='/experience'>Expérience</a>
            <a className="header__firstsection__menudesktop__link" href='/formation'>Formation</a>
            <a className="header__firstsection__menudesktop__link" href='/contact'>Contact</a>

          </div>

         

          <div className="header__firstsection__social">
              <a href="https://github.com/RosaHuisman" target="_blank" rel="noreferrer" className="btn-social btn-github"><i className="fab fa-github"></i></a>
              <a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="btn-social btn-email"><i className="fa fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/rosa-huisman-480237216/" target="_blank" rel="noreferrer" className="btn-social btn-linkedin"><i className="fa fa-linkedin"></i></a>

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