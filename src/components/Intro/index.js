import React from 'react'
import './style.scss';

import me from '../../images/me.jpg'
import cv from '../../images/CV_image.jpg'

import { TiArrowForward, TiWeatherSunny } from 'react-icons/ti';
import { GiCandleLight } from 'react-icons/gi'
import { ImSearch } from 'react-icons/im'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

const Intro = ({
  clickImage,
  isOpen,
  clickCV,
  cvOpen
}) => {


const onClickImage = () => {
    clickImage();
};

const handleClickCV = () => {
  clickCV();
};

  return (
        <div className="intro">

          <div className="intro__container"> 
            
            <div className={ isOpen ? "intro__imghello__open" : "intro__imghello" }>
              
              <div className={ isOpen ? "intro__title__open" : "intro__title" } > 
              <span className="letter01">H</span>
              <span className="letter02">e</span>
              <span className="letter03">l</span>
              <span className="letter04">l</span>
              <span className="letter05">o</span>
              <span className="letter06">&nbsp;</span>
              <span className="letter07">W</span>
              <span className="letter08">o</span>
              <span className="letter09">r</span>
              <span className="letter10">l</span>
              <span className="letter11">d</span>

              </div>
              
              <div className="intro__clickimage"> 
                <img src={me} className={ isOpen ? "intro__image__open" : "intro__image" } alt="Rosa Huisman" onClick={onClickImage} />   
                <p onClick={onClickImage} className={ isOpen ? "intro__about__open" : "intro__about" }>Cliquez ici <TiArrowForward/>  </p>
              </div>

            </div>

            <p className={ isOpen ? "intro__text__open" : "intro__text" }>
            <b>Passionnée</b> d’informatique et <b>perfectionniste</b> jusqu’au bout des ongles, j’ai récemment terminé une formation intensive et passionnante dans le développement web, à l’école O’Clock. Formation de 800 heures pour devenir développeuse <b>JS Fullstack</b>, avec une spécialisation en <b>Réact/Redux</b>. Dans ce portfolio vous trouverez les projets que j'ai réalisé, mais également ceux qui sont en cours. Si vous souhaitez en savoir plus sur mes motivations, n'hésitez pas à me contacter.  

            </p>
            
          </div >

            <button className={ isOpen ? "intro__text__back__open" : "intro__text__back" } onClick={onClickImage} >Retour</button>

          <div className={ isOpen || cvOpen ? "intro__meta__open" : "intro__meta" }>
            <p> <AiOutlinePhone/> 06.73.36.90.50 </p>
            <p> <AiOutlineMail/> <a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="intro__meta__link"> rosa.huisman@gmail.com</a>
 </p>
            <p> <GiCandleLight/> 33 ans </p>
            <p> <ImSearch /> En recherche d'emploi </p>
            <p> <TiWeatherSunny /> Sud de la France </p>
          </div>

          <div className="intro__cv">
            <button className={cvOpen ? "intro__cv__button__open" : "intro__cv__button" } onClick={handleClickCV}> Mon CV </button>
            <img src={cv} alt="CV de Rosa Huisman" className={cvOpen ? "intro__cv__cvopen" : "intro__cv__close" } />
            <button className={cvOpen ? "intro__cv__closebutton__open" : "intro__cv__closebutton" } onClick={handleClickCV}> <i className="close icon"></i></button> 
            <form method="get" action={cv}>
            <button className={cvOpen ? "intro__cv__dlbutton__open" : "intro__cv__dlbutton" } type="submit"><i className="download icon"></i></button>
          </form>
          </div>
          
        </div>
       
  );
}



export default Intro;