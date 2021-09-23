import React from 'react'
import './style.scss';

import Exp from'./Exp'

const Experience = ({
  experiences
}) => {
  console.log(experiences)
    return (
      <div className="experience">
        {experiences.map((exp) => (
          <Exp
            key={exp.title} 
            experience={exp}
          />
        ))}
      </div>
     
);
}



export default Experience;