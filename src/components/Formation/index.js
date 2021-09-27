import React from 'react'
import './style.scss';


const Formation = ({
  
}) => {
    return (
      <div className="formation"> 
        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Formation Développeur Web et Web Mobile, Niveau V spécialisation Réact </h2>
          <p className="formation__diploma__date">Mars à septembre 2021</p>
          <p className="formation__diploma__place">Ecole O'clock, labelisée Grande Ecole du Numérique</p>
          <p className="formation__diploma__description"> 5 mois de formation :
          <ul className="formation__diploma__description__ul"> 
            <li>
              3 mois de socle : HTML5, CSS3, JavaScript, NodeJS, PostgreSQL, Express, Sequelize.
            </li>
              <li>
              1 mois de spécialisation : Réact / Redux. 
              </li>
              <li>
                1 mois de projet en groupe : Product Owner & Développeuse Front-end pour le projet NotaBebe.
              </li>
            </ul> 
          
           </p>
          <h3 className="formation__diploma__subtitle">Titre Pro en cours de préparation</h3>
      
        </div>

        <div className="formation__diploma">
          <h2 className="formation__diploma__title">Bac Scientifique</h2>
          <p className="formation__diploma__date">obtenu en 2007</p>
          <p className="formation__diploma__place">Lycée Jean Baptiste Dumas à Alès (30100)</p>
      
        </div>

    </div>
     
);
    }


export default Formation;