import React, { useState } from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';
import Modal from '../Modal';

import home_office from '../../assets/images/home-office.jpg';


const Experience = () => {

  const [activeModal, setActiveModal] = useState(null); 

  const handleNotSoFast = () => {
    alert('OUPS !! Pas si vite ! Cette fonctionnalité n\'est pas encore disponible. Mais elle le sera bientôt !');
  }
    return (
      <div className="experience mt-4 bg-light">
        <SectionTitle title={'Ce que je sais faire'} />
        <ul className='experience__list'>
          <li className='experience__list__item'> <span><i className="bi bi-check2-square"></i> Créer un espace d’authentification </span><button onClick={handleNotSoFast} className='experience__list__item__button'> Tester </button> </li>
          <li className='experience__list__item'> <span><i className="bi bi-check2-square"></i> Créer un site vitrine </span><button className='experience__list__item__button' onClick={() => window.open('https://mairie-de-cardet.com/', '_blank')}> Voir un exemple </button></li>
          <li className='experience__list__item'> <span><i className="bi bi-check2-square"></i> Créer une application métier aboutie </span><button className='experience__list__item__button' onClick={handleNotSoFast}> Testez-la sur son espace de test </button> </li>
          <li className='experience__list__item'> <span><i className="bi bi-check2-square"></i> Collaborer avec une équipe </span><button className='experience__list__item__button' onClick={() => setActiveModal("teamwork")}> En savoir plus </button> </li>
          <li className='experience__list__item'> <span><i className="bi bi-check2-square"></i> Le télétravail </span><button className='experience__list__item__button' onClick={() => setActiveModal("remoteWork")}> La preuve en images </button> </li>
        </ul>

        {activeModal === "teamwork" && (
          <Modal
            setIsOpen={() => setActiveModal(null)}
            title={"J'aime le travail d'équipe"}
            content={"Travailler en équipe est essentiel pour moi. J'aime collaborer, partager des idées et avancer ensemble vers un objectif commun. J'ai déjà eu l'occasion de faire du pair programming, et j'ai beaucoup aimé."}
          />
        )}

        {activeModal === "remoteWork" && (
          <Modal
            setIsOpen={() => setActiveModal(null)}
            title={"Full remote friendly"}
            content={"Depuis 2021, je travaille en mode hybride, avec une journée en présentiel et le reste en télétravail. Cette expérience m'a permis de développer une organisation rigoureuse et de maîtriser les outils collaboratifs afin de rester efficace dans tous les environnements. Disposant d'un espace de travail dédié et d'un équipement adapté, je peux travailler en toute autonomie. Ce mode de fonctionnement me convient particulièrement, car il me permet de concilier harmonieusement vie professionnelle et personnelle."}
            image={home_office}
          />
        )}

      </div>
  );
}

export default Experience;