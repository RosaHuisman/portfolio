import { useState } from "react";
import backImage from "./../../assets/images/back.jpg";
import './style.scss';

const cardsData = {
  memoryCards: [],
  returnedCards: [],
  listColor: ["H", "C"],
  cards: [
    { id: 1, name: "ananas", value: 1 },
    { id: 2, name: "ananas", value: 1 },
    { id: 3, name: "banane", value: 2 },
    { id: 4, name: "banane", value: 2 },
    { id: 5, name: "cerise", value: 3 },
    { id: 6, name: "cerise", value: 3 },
    { id: 7, name: "citron", value: 4 },
    { id: 8, name: "citron", value: 4 },
    { id: 9, name: "fraise", value: 5 },
    { id: 10, name: "fraise", value: 5 },
    { id: 11, name: "kiwi", value: 6 },
    { id: 12, name: "kiwi", value: 6 },
    { id: 13, name: "orange", value: 7 },
    { id: 14, name: "orange", value: 7 },
    { id: 15, name: "poire", value: 8 },
    { id: 16, name: "poire", value: 8 },
  ],
};

const MemoryGame = () => {
  const [memoryCards, setMemoryCards] = useState([]);
  const [returnedCards, setReturnedCards] = useState([]);

  const generateCards = () => {
    return cardsData.cards;
  };

  const shuffleCards = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  };

  const newGame = () => {
    setMemoryCards(shuffleCards(generateCards()));
    setReturnedCards([]);
  };

  const returnCard = (card) => {
    
    if (returnedCards.length < 2) {
      
      const updatedCards = memoryCards.map((c) =>
        c.id === card.id ? { ...c, returned: true } : c
      );
      
      setMemoryCards(updatedCards);
      setReturnedCards([...returnedCards, card]);

      if (returnedCards.length === 1) {
        checkMatch(returnedCards[0], card);
      }
    }
  };

  const checkMatch = (card1, card2) => {
    if (card1.name === card2.name) {
      setTimeout(() => {
        setMemoryCards((prev) =>
          prev.map((c) =>
            c.name === card1.name ? { ...c, isMatched: true } : c
          )
        );
        setReturnedCards([]);
      }, 600);
    } else {
      setTimeout(() => {
        setMemoryCards((prev) =>
          prev.map((c) =>
            c.id === card1.id || c.id === card2.id ? { ...c, returned: false } : c
          )
        );
        setReturnedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="cardsboard">
      <button onClick={newGame} className="newgame_button">Nouvelle partie</button>
      <div className="cardsboard__cards">
        {memoryCards.map((card) => (
          <div className="card" onClick={() => returnCard(card)} key={card.id}>
            <img
              src={card.returned ? require(`./../../assets/images/${card.name}.png`).default : backImage}
              alt={card.fruit}
              className={card.isMatched ? "card__image card__image__matched" : "card__image"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
