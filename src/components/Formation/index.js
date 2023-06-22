import React from 'react'
import './style.scss';


const Formation = () => {
    return (
      <div className="formation"> 
        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Formation Développeur Concepteur d'Application en Alternance </h2>
          <p className="formation__diploma__date">Novembre 2021 à novembre 2022</p>
          <p className="formation__diploma__place">Ecole Simplon à Alès (Gard)</p>
          <p className="formation__diploma__description"> Rythme : 3 semaines en entreprise / 1 semaine à l'école. Entreprise Caplogik à Nîmes (Gard).</p>
          <h3 className="formation__diploma__subtitle">Titre Professionnel Concepteur Développeur d'Application obtenu en noovembre 2022.</h3>
      
        </div>
        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Formation Développeur Web et Web Mobile, Niveau V spécialisation React </h2>
          <p className="formation__diploma__date">Mars à septembre 2021</p>
          <p className="formation__diploma__place">Ecole O'clock, labelisée Grande Ecole du Numérique</p>
          <p className="formation__diploma__description"> 5 mois de formation en téléprésentiel :
          <ul className="formation__diploma__description__ul"> 
            <li>
              3 mois de socle : HTML5, CSS3, JavaScript, NodeJS, PostgreSQL, Express, Sequelize.
            </li>
              <li>
              1 mois de spécialisation : React / Redux. 
              </li>
              <li>
                1 mois de projet en groupe : Product Owner & Développeuse Front-end pour le projet NotaBebe.
              </li>
            </ul> 
          
           </p>
      
        </div>

        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Bac Scientifique</h2>
          <p className="formation__diploma__date">obtenu en 2007</p>
          <p className="formation__diploma__place">Lycée Jean Baptiste Dumas à Alès (Gard)</p>
      
        </div>

        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Brevet des Collèges</h2>
          <p className="formation__diploma__date">obtenu en 2003</p>
          <p className="formation__diploma__place">Collège Florian à Anduze (Gard)</p>
      
        </div>

    </div>
     
);
    }


export default Formation;