import React from 'react'
import './style.scss';

import me from '../../images/me.jpg'
import cv from '../../images/CV_image.jpg'


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
              
              <div className="intro__imgoverlay"> 
                <img src={me} className={ isOpen ? "intro__image__open" : "intro__image" } alt="Rosa Huisman" onClick={onClickImage} />   
                <p className="intro__aboutme">About me ...</p>
              </div>

            </div>

            <p className={ isOpen ? "intro__text__open" : "intro__text" }>
            Ut sit amet euismod diam. Nunc est enim, imperdiet ut justo sed, fermentum lacinia urna. Phasellus tristique scelerisque dapibus. Mauris elit lectus, laoreet quis ante sed, tempor tincidunt sapien. In auctor finibus aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incepsdqftos himenaeos. Class aptent taciti. Class aptent taciti, Class aptent taciti , Cqdsdsclass aptentsdqf taciti,
            </p>
            
          </div >

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