import React from 'react'
import './style.scss';

import me from '../../images/me.jpg'
import cv from '../../images/CV_Rosa_Huisman.png'

import drawwomen from '../../images/fille_a_lordinateur.png'


import { TiArrowForward, TiWeatherSunny } from 'react-icons/ti';
import { GiCandleLight } from 'react-icons/gi'
import { ImSearch } from 'react-icons/im'
import { AiOutlinePhone, AiOutlineMail, AiFillHtml5 } from 'react-icons/ai'
import { GrReactjs, GrNode, GrGithub } from 'react-icons/gr'
import { SiRedux, SiJavascript } from 'react-icons/si'
import { DiPostgresql, DiCss3 } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'

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

    <>

    <div className="intro__responsive">

        <div className="intro">

          <div className={ cvOpen? "intro__hidden" : null}>

          
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

              <div className="intro__firstsection">
                      <img src={drawwomen} className={ isOpen ? "intro__firstsection__image__draw__open" : "intro__firstsection__image__draw" } alt="dessin jeune fille avec ordinateur" onClick={onClickImage} />
                      <img src={me} className={ isOpen ? "intro__firstsection__image__open" : "intro__firstsection__image" } alt="Rosa Huisman" onClick={onClickImage} />   
                      <p onClick={onClickImage} className={ isOpen ? "intro__firstsection__about__open" : "intro__firstsection__about" }>Cliquez ici <TiArrowForward/>  </p>


              <p className={ isOpen ? "intro__firstsection__text__open" : "intro__firstsection__text" }>
            <b>Passionnée</b> d’informatique et <b>perfectionniste</b> jusqu’au bout des ongles, j’ai récemment terminé une formation intensive et passionnante dans le développement web, à l’école O’Clock. Formation de 800 heures pour devenir développeuse <b>JS Fullstack</b>, avec une spécialisation en <b>React/Redux</b>. Dans ce portfolio vous trouverez les projets que j'ai réalisé, mais également ceux qui sont en cours. Si vous souhaitez en savoir plus sur mes motivations, n'hésitez pas à me contacter.  

            <div className={ isOpen ? "intro__firstsection__icons__open" : "intro__firstsection__icons" }>
              <p><SiJavascript/></p>
              <p><GrReactjs/></p>
              <p><SiRedux/></p>
              <p><GrNode/> </p>
              <p><AiFillHtml5/> </p>
              <p><DiCss3/></p>
              <p><DiPostgresql/></p>
              <p><GrGithub/></p>
              <p><BsBootstrap/></p>
              
            </div>

            </p>

            

            <button className={ isOpen ? "intro__firstsection__text__back__open" : "intro__firstsection__text__back" } onClick={onClickImage} >Retour</button>

          </div>

          </div>

          <div className="intro__secondsection">

              <div className={ isOpen || cvOpen ? "intro__secondsection__contact__open" : "intro__secondsection__contact" }>
                  <p> <AiOutlinePhone/> 06.73.36.90.50 </p>
                  <p> <AiOutlineMail/> <a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="intro__secondsection__contact__link"> rosa.huisman@gmail.com</a>
                  </p>
                  <p> <GiCandleLight/> 33 ans </p>
                  <p> <ImSearch /> En recherche d'emploi </p>
                  <p> <TiWeatherSunny /> Sud de la France </p>
               </div> 

               

            <div className="intro__secondsection__cv">
              <button className={cvOpen ? "intro__secondsection__cv__button__open" : "intro__secondsection__cv__button" } onClick={handleClickCV}> Mon CV </button>
              <img src={cv} alt="CV de Rosa Huisman" className={cvOpen ? "intro__secondsection__cv__cvopen" : "intro__secondsection__cv__close" } />
              <button className={cvOpen ? "intro__secondsection__cv__closebutton__open" : "intro__secondsection__cv__closebutton" } onClick={handleClickCV}> <i className="close icon"></i></button> 
              <form method="get" action={cv}>
                <button className={cvOpen ? "intro__secondsection__cv__dlbutton__open" : "intro__secondsection__cv__dlbutton" } type="submit"><i className="download icon"></i></button>
            </form>
            </div>


          </div>
          
        </div>


        </div>


        {/* ---------- DESKTOP ------------------ */}

        <div className="intro__desktop">

        <div className="introdt">

          <div className="introdt__left"> 

          <div className={ isOpen || cvOpen ? "introdt__left__title__open" : "introdt__left__title" } > 
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

              <div className={ isOpen || cvOpen ? "introdt__left__contact__open" : "introdt__left__contact" }>
                  <p className="introdt__left__contact__element introdt__left__contact__element__tel" > <AiOutlinePhone/> 06.73.36.90.50 </p>
                  <p> <a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="introdt__left__contact__element introdt__left__contact__element__link"> <AiOutlineMail/> rosa.huisman@gmail.com</a>
                  </p>
                  <p className="introdt__left__contact__element introdt__left__contact__element__age"> <GiCandleLight/> 33 ans </p>
                  <p className="introdt__left__contact__element introdt__left__contact__element__job"> <ImSearch /> En recherche d'emploi </p>
                  <p className="introdt__left__contact__element introdt__left__contact__element__myhome"> <TiWeatherSunny /> Sud de la France </p>
              </div> 

              <div className="introdt__left__cv">
              <button className={cvOpen ? "introdt__left__cv__button__open" : isOpen ? "introdt__right__text__cvbutton__open" : "introdt__left__cv__button" } onClick={handleClickCV}> Mon CV </button>

              <button className={ isOpen && !cvOpen ? "introdt__right__text__back__open" : "introdt__right__text__back" } onClick={onClickImage} >Retour</button>

              <img src={cv} alt="CV de Rosa Huisman" className={cvOpen ? "introdt__left__cv__cvopen" : "introdt__left__cv__close" } />

              <div className="introdt__left__cv__buttons">
                <button className={cvOpen ? "introdt__left__cv__buttons__closebutton__open" : "introdt__left__cv__buttons__closebutton" } onClick={handleClickCV}> <i className="close icon"></i></button> 
                <form method="get" action={cv}>
                  <button className={cvOpen ? "introdt__left__cv__buttons__dlbutton__open" : "introdt__left__cv__buttons__dlbutton" } type="submit"><i className="download icon"></i></button>
                </form>

              </div>
            </div>
          
          </div>

          
          <div className={ cvOpen ? "introdt__right__hidden" : "introdt__right" }> 

          <div className="introdt__right__container">

          <p className={ isOpen ? "introdt__right__text__open" : "introdt__right__text" }>
            <b>Passionnée</b> d’informatique et <b>perfectionniste</b> jusqu’au bout des ongles, j’ai récemment terminé une formation intensive et passionnante dans le développement web, à l’école O’Clock. Formation de 800 heures pour devenir développeuse <b>JS Fullstack</b>, avec une spécialisation en <b>React/Redux</b>. Dans ce portfolio vous trouverez les projets que j'ai réalisé, mais également ceux qui sont en cours. Si vous souhaitez en savoir plus sur mes motivations, n'hésitez pas à me contacter.  
            <div className={ isOpen ? "introdt__icons__open" : "introdt__icons" }>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__js"><SiJavascript/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__react"><GrReactjs/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__redux"><SiRedux/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__node"><GrNode/> </p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__html"><AiFillHtml5/> </p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__css"><DiCss3/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__postgresql"><DiPostgresql/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__git"><GrGithub/></p>
              <p className="introdt__icons__open__icon introdt__icons__open__icon__bootstrap"><BsBootstrap/></p>
              
            </div>

            </p>
            

          <img src={drawwomen} className={ isOpen ? "introdt__right__image__draw__open" : "introdt__right__image__draw" } alt="dessin jeune fille avec ordinateur" onClick={onClickImage} />
          
          <img src={me} className={ isOpen ? "introdt__right__image__me__open" : "introdt__right__image__me" } alt="Rosa Huisman" onClick={onClickImage} />    
          </div>
        
          <p onClick={onClickImage} className={ isOpen ? "introdt__right__about__open" : "introdt__right__about" }>Plus d'infos <TiArrowForward/>  </p>

          
          </div>


          </div>
         


        </div>

</>
       
  );
}



export default Intro;