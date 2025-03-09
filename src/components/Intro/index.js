import React from 'react'
import './style.scss';

import rh from '../../assets/images/rh.png'


const Intro = () => {

  return (
    <div className='intro mt-4'>
      <div className='text-center'>
        <div className='fs-5'>Bienvenue sur le portfolio de :</div>
        <h1 className='fw-bold display-3'>Rosa Huisman</h1>
        <h2 className='intro__subtitle fs-6'>CONCEPTRICE DÉVELOPPEUSE D’APPLICATIONS</h2>
      </div>
        
      <p className='my-3 mx-2'> Développeuse web diplômée, forte d'une première expérience professionnelle et passionnée par les technologies de pointe. Motivée par l'innovation, je suis à la recherche d'un environnement dynamique où je pourrai mettre à profit mon esprit d'équipe et mon envie de contribuer à des projets numériques ambitieux. </p>

      <div className='intro__about text-center pt-3 px-5 mt-5 d-flex justify-content-between'>
        <div className='d-md-flex justify-content-between flex-wrap text-center'>
          <div className='intro__about__contact'>
            <p><i className="me-2 bi bi-geo-alt"></i>30350, Cassagnoles</p>
            <p><i className="me-2 bi bi-phone"></i>06.73.36.90.50 </p>
            <p> 
              <a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="intro__secondsection__contact__link text-black"><i className="me-2 bi bi-envelope"></i>
              rosa.huisman@gmail.com</a>
            </p>
          </div>
          <div className='intro__about__infos'>
            <p><i className="me-2 bi bi-cake"></i>{ new Date().getFullYear() - 1988 } ans </p>
            <p><i className="me-2 bi bi-car-front"></i>Permis B - Véhiculée </p>
            <p><i className="me-2 bi bi-person-arms-up"></i>En couple - 2 enfants</p>
          </div>
          <div className='w-100 text-center'><p><i className="me-2 bi bi-globe-americas"></i>Ouverte aux nouvelles opportunités - mobilité 50 km - full remote friendly</p></div>
        </div>
        <img src={rh} alt='rosa huisman' width={200} className='intro__image'/>
      </div>   
    </div>
  );
}



export default Intro;