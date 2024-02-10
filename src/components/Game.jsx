import React, { useState } from "react";
import Card from "./Card";
import { cardsData } from "../Cards";

function Game() {

  const [cardsState, setCardsState] = useState(cardsData);


  const [firstCard, setFirstCard] = useState(null);

  const [secondClick, setSecondClick] = useState(false);

  const [wait, setWait] = useState(false);


  const checker = async (card) => {
    if (card.name === firstCard.name) {

      card["passed"] = true;
      firstCard["passed"] = true;
      changeCardStatusHandler(card);
      changeCardStatusHandler(firstCard);
    } else {
      setWait(true);
      setTimeout(() => {
        changeCardStatusHandler(card);
        changeCardStatusHandler(firstCard);
        setWait(false);
      }, 700);
    }
  };

  const changeCardStatusHandler = async (clickedCard) => {
    if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
    let index = cardsState.findIndex((card) => card.id === clickedCard.id);
    let newState = [...cardsState];
    newState.splice(index, 1, clickedCard);
    await setCardsState(newState);
  };

  const handleClick = async (e, clickedCard) => {
    if (wait) {
      return;
    }
    if (!secondClick) {
      await setFirstCard(clickedCard);
      await setSecondClick(true);
      changeCardStatusHandler(clickedCard);
    } else {
      await setSecondClick(false);
      changeCardStatusHandler(clickedCard);
      checker(clickedCard);
      setFirstCard(null);
    }
  };

  return (
    <section className="memory-game">
      {cardsState?.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onClick={(e) => handleClick(e, card)}
          />
        );
      })}

    </section>
  );
}

export default Game;
