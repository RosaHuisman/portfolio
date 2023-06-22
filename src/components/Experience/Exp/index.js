import React from 'react'
import './style.scss';

import {Link} from 'react-router-dom'

const Exp = ({
  experience,
  openDescription,
  descriptionOpen,
  element
}) => {

  const handleDescription = (evt) => {
    openDescription(evt.target.title);
  }

const maxlimit = 230;


    return (
      <div className="exp">
        {experience.image && <Link to={{ pathname: experience.link_project }} target="_blank"> <img src={require(`../../../images/${experience.image}`).default} alt={experience.image} className="exp__image"/> </Link> }
        
        <h2 className="exp__title">{experience.title}</h2>
        <p className="exp__date">{experience.date}</p>
        <p className="exp__place">{experience.place}</p>
        <h3 className="exp__subtitle">{experience.subtitle}</h3>
        
          { ((experience.description).length <= maxlimit) ? (
            <p className="exp__description">{experience.description}</p>
              
          ): ((experience.description).length > maxlimit) && !descriptionOpen && (experience.title !== element) ? (
            
            <p className="exp__description" onClick={handleDescription} title={experience.title}>
                {(((experience.description).substring(0,maxlimit-3)) + " . . . Lire la suite")}
              </p>
              
          ): experience.title === element ? (

            <p className="exp__description" onClick={handleDescription} title={experience.title}>{experience.description}</p>

          ): 
          <p className="exp__description" onClick={handleDescription} title={experience.title}>
                {(((experience.description).substring(0,maxlimit-3)) + " . . . Lire la suite")}
              </p>
          }
          
        
        {experience.link_youtube ? (
          <Link to={{ pathname: experience.link_youtube }} className="exp__link" target="_blank"> Présentation Youtube </Link>
        ) : null
        }
        {experience.link_github ? (
        <Link to={{ pathname: experience.link_github }} className="exp__link" target="_blank"> Repo Github </Link>
        ) : null
        }
        {experience.link_project ? (
        <Link to={{ pathname: experience.link_project }} className="exp__link" target="_blank"> Site en ligne </Link>
        ) : null
        }



      </div>
     
);
}

export default Exp;