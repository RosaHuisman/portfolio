import React from 'react'
import './style.scss';


import Diploma from'./Diploma/'

const Formation = ({
  formations
}) => {
    return (
      <div className="formation">
        {formations.map((diploma) => (
          <Diploma
            key={diploma.title} 
            diploma={diploma}

          />
        ))}
      </div>
     
);
}



export default Formation;