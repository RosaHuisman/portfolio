import React from 'react'
import './style.scss';

import me from '../../images/me.jpg'


const Intro = ({
  clickImage,
  isOpen,
}) => {

const onClickImage = () => {
    clickImage();
};

  return (
        <div className="intro">
          <div className="intro__background"> 

            <img src={me} className={ isOpen ? "intro__image__open" : "intro__image" } alt="Rosa Huisman" onClick={onClickImage}/>
           
            <p className={ isOpen ? "intro__text__open" : "intro__text" }>
            Ut sit amet euismod diam. Nunc est enim, imperdiet ut justo sed, fermentum lacinia urna. Phasellus tristique scelerisque dapibus. Mauris elit lectus, laoreet quis ante sed, tempor tincidunt sapien. In auctor finibus aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incepsdqftos himenaeos. Class aptent taciti. Class aptent taciti, Class aptent taciti , Cqdsdsclass aptentsdqf taciti,
            </p>
            
          

           
          </div >
        </div>
       
  );
}

export default Intro;