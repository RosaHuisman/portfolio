import React from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';
import './style.scss';



const Formation = () => {
    return (
      <div className="formation mt-4 text-center">
         <SectionTitle title={'Ma formation'} />
         <ul className='list-group list-group-flush p-3'>
          <li className='list-group-item p-3'>
            <h2 className='formation__title'>Concepteur développeur d'applications | Novembre 2021 - Novembre 2022</h2>
            <p className='my-2'><i className='bi bi-backpack'> </i>Simplon, 30100 Alès</p>
            <p> <i className="bi bi-building"></i> En alternance chez Caplogik, 30000 Nîmes.</p>

          </li>

          <li className='list-group-item p-3'>
            <h2 className='formation__title'>Développeur web - web mobile | Mars 2021 - Septembre 2021</h2>            
            <p className='my-2'><i className='bi bi-backpack'></i> O’Clock, téléprésentiel</p>
            <p><i className="bi bi-file-code"></i> 3 mois de NodeJS, 1 mois de React/Redux et 1 mois de projet en groupe.</p>
          </li>

          <li className='list-group-item p-3'>
            <h2 className='formation__title'>Baccalauréat scientifique | 2007</h2>
            <p className='my-2'> <i className='bi bi-backpack'> </i>Lycée Jean Baptiste Dumas, 30100 Alès.</p>
          </li>
         </ul>
      </div>
  );
}

export default Formation;