import React from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';
import './style.scss';



const PlayRoom = () => {
    return (
      <div className="playroom mt-4 bg-light">
         <SectionTitle title={'Les jeux auxquels j’aime jouer (ça, c’est cadeau !)'} />
         <div className='playroom__games'>
          <a href="/memory" className="playroom__games__btn">Memory</a>
          <a href="/tic-tac-toe" className="playroom__games__btn">Tic Tac Toe</a>
         </div>
      </div>
  );
}

export default PlayRoom;