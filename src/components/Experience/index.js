import React, { useState } from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';
import Modal from '../Modal';


const Experience = () => {

  const [activeModal, setActiveModal] = useState(null); 

  const handleNotSoFast = () => {
    alert('OUPS !! Pas si vite ! Cette fonctionnalité n\'est pas encore disponible. Mais elle le sera bientôt !');
  }
    return (
      <div className="experience mt-4 bg-light">
        <SectionTitle title={'Ce que je sais faire'} />
        <ul className='experience__list'>
          <li className='experience__list__item'> <span><i class="bi bi-check2-square"></i> Créer un espace d’authentification </span><button onClick={handleNotSoFast} className='experience__list__item__button'> Tester </button> </li>
          <li className='experience__list__item'> <span><i class="bi bi-check2-square"></i> Créer un site vitrine </span><button className='experience__list__item__button' onClick={() => window.open('https://mairie-de-cardet.com/', '_blank')}> Voir un exemple </button></li>
          <li className='experience__list__item'> <span><i class="bi bi-check2-square"></i> Créer une application métier aboutie </span><button className='experience__list__item__button' onClick={handleNotSoFast}> Testez-la sur son espace de test </button> </li>
          <li className='experience__list__item'> <span><i class="bi bi-check2-square"></i> Collaborer avec une équipe </span><button className='experience__list__item__button' onClick={() => setActiveModal("teamwork")}> En savoir plus </button> </li>
          <li className='experience__list__item'> <span><i class="bi bi-check2-square"></i> Le télétravail </span><button className='experience__list__item__button' onClick={() => setActiveModal("remoteWork")}> La preuve en images </button> </li>
        </ul>

        {/* Modal pour "Collaborer avec une équipe" */}
        {activeModal === "teamwork" && (
          <Modal
            setIsOpen={() => setActiveModal(null)}
            title={"J'aime le travail d'équipe"}
            content={"Travailler en équipe est essentiel pour moi. J'aime collaborer, partager des idées et avancer ensemble vers un objectif commun. J'ai déjà eu l'occasion de faire du pair programming, et j'ai beaucoup aimé."}
          />
        )}

        {/* Modal pour "Travailler en distanciel comme en présentiel" */}
        {activeModal === "remoteWork" && (
          <Modal
            setIsOpen={() => setActiveModal(null)}
            title={"Full remote friendly"}
            content={"Depuis 2021, je travaille de manière hybride (1 jour en présentiel, le reste en distanciel). J'ai appris à bien m'organiser et à utiliser les outils collaboratifs pour rester efficace quel que soit l'environnement. J'ai un espace de travail dédié chez moi, et je suis équipée pour travailler en toute autonomie. C'est un mode de travail que j'apprécie particulièrement, afin pouvoir concilier vie privée et vie pro de la manière la plus sereine."}
          />
        )}

      </div>
  );
}

export default Experience;