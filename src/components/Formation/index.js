import React from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';



const Formation = () => {
    return (
      <div className="formation mt-4">
         <SectionTitle title={'Ma formation'} />
         <ul>
          <li>
            CONCEPTEUR DÉVELOPPEUR D'APPLICATION | NOVEMBRE 2021 - NOVEMBRE 2022
            SIMPLON, 30100 Alès
            En alternance chez Caplogik, 30000 Nîmes.

          </li>

          <li>
            DÉVELOPPEUR WEB - WEB MOBILE | MARS 2021 - SEPTEMBRE 2021
            O’CLOCK, téléprésentiel
            3 mois de NodeJS, 1 mois de React/Redux et 1 mois de projet en groupe : Notabébé.
          </li>

          <li>
            BACCALAURÉAT SCIENTIFIQUE | 2007
            LYCÉE JEAN BAPTISTE DUMAS, 30100 Alès
          </li>
         </ul>
          



          
      </div>
  );
}

export default Formation;