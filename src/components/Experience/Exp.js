import React from 'react'
import './style.scss';


const Exp = ({experience}) => {
    console.log(experience)
    return (
      <div className="exp">
        <p>{experience.title}</p>
        <p>{experience.date}</p>
        <p>{experience.place}</p>
        <p>{experience.subtitle}</p>
        <p>{experience.description}</p>
      </div>
     
);
}

export default Exp;