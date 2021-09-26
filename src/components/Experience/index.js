import React from 'react'
import './style.scss';

import Exp from'./Exp/'

const Experience = ({
  experiences,
  openDescription, 
  descriptionOpen,
  element
}) => {
    return (
      <>
      <div className="experience">
        {experiences.map((exp) => (
          <Exp
            key={exp.title} 
            experience={exp}
            openDescription={openDescription}
            descriptionOpen={descriptionOpen}
            element={element}

          />
        ))}
      </div>
      </>
     
);
}



export default Experience;