import React from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';


const Links = () => {
    return (
      <div className="links mt-4 bg-light p-3">
        <SectionTitle title={'Liens utiles'} />
        <div className='d-md-flex flex-wrap justify-content-around text-center'>
          <div>
            <div><a href="https://github.com/RosaHuisman" target='_blank' rel="noreferrer" className="links__link"> Mon profil github </a></div>
            <div><a href="CV.pdf" target="_blank" rel="noopener noreferrer" className="links__link"> Mon CV (à imprimer)</a></div>

          </div>
          <div>
            <div><a href="https://www.linkedin.com/in/rosa-huisman-480237216/" target='_blank' rel="noreferrer" className="links__link"> Mon profil LinkedIn </a></div>
            <div><a href="mailto:rosa.huisman@gmail.com" rel="noreferrer" className="links__link">Me contacter par mail</a></div>
          </div>
        </div>        
      </div>
  );
}

export default Links;