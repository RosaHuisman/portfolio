import React from 'react'
import './style.scss';



const Diploma = ({
  diploma
}) => {

    return (
      <div className="diploma">
        <h2 className="diploma__title">{diploma.title}</h2>
        <p className="diploma__date">{diploma.date}</p>
        <p className="diploma__place">{diploma.place}</p>
        <h3 className="diploma__subtitle">{diploma.subtitle}</h3>
        {diploma.description ? 
        <p className="diploma__description">{diploma.description}</p>
      : null}
        

      </div>
     
);
}

export default Diploma;