import React from 'react'
import './style.scss';

import me from '../../images/me.jpg'

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  " Rosa",
  " a front-end developer",
  " a react developer",
  " a fullstack developer"
];

const Intro = ({
  clickImage,
  isOpen,
}) => {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>
    setIndex(index => index + 1),
    3000 // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);


const onClickImage = () => {
    clickImage();
};

  return (
        <div className="intro">
           
          



          <div className="intro__background"> 
            
            <div className={ isOpen ? "intro__imghello__open" : "intro__imghello" }>
              
              <h1 className={ isOpen ? "intro__title__open" : "intro__title" } > Hello world </h1>
              
              <div className="container">

                <img src={me} className={ isOpen ? "intro__image__open" : "intro__image" } alt="Rosa Huisman" onClick={onClickImage} />   
                <div className="overlay">
                <div className="text">About me ...</div>
                </div>
              </div>

            </div>

            <p className="intro__clickonme">Click on me ... </p>

            <p className={ isOpen ? "intro__text__open" : "intro__text" }>
            Ut sit amet euismod diam. Nunc est enim, imperdiet ut justo sed, fermentum lacinia urna. Phasellus tristique scelerisque dapibus. Mauris elit lectus, laoreet quis ante sed, tempor tincidunt sapien. In auctor finibus aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incepsdqftos himenaeos. Class aptent taciti. Class aptent taciti, Class aptent taciti , Cqdsdsclass aptentsdqf taciti,
            </p>
            
            <h2 className="intro__textanimation" > 
            I'm&nbsp; 
            <TextTransition
            text={ TEXTS[index % TEXTS.length] }
            springConfig={ presets.wobbly }
            />
            </h2>
            
           
          </div >

        </div>
       
  );
}



export default Intro;