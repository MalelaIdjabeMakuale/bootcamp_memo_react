import carrera from "./images/cards-images/Carrera.jpeg";
import tavares from "./images/cards-images/Tavares.jpeg";
import james from "./images/cards-images/james.jpeg";
import ionescu from "./images/cards-images/sabrina.webp";
import candance from "./images/cards-images/candance.jpeg";
import llull from "./images/cards-images/Lllull.jpeg";

const cards = [
  { id: 1, name: "carrera", image:carrera },
  { id: 2, name: "carrera", image: carrera },
  { id: 3, name: "tavares", image: tavares },
  { id: 4, name: "tavares", image: tavares },
  { id: 5, name: "james", image: james },
  { id: 6, name: "james", image: james },
  { id: 7, name: "ionescu", image: ionescu },
  { id: 8, name: "ionescu", image: ionescu },
  { id: 9, name: "candance", image: candance },
  { id: 10, name: "candance", image: candance },
  { id: 11, name: "llull", image: llull },
  { id: 12, name: "llull", image: llull },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
