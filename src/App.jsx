import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./component/Info";
import image from "./assets/icons/medal.svg";
import image2 from "./assets/icons/flip.svg";
import image3 from "./assets/icons/stopwatch.svg";
import Card from "./component/Card";
import card2 from "./assets/icons/airplane.svg";
import card3 from "./assets/icons/bath-tub.svg";
import card4 from "./assets/icons/hotel.svg";
import card5 from "./assets/icons/surf.svg";
import card8 from "./assets/icons/cocktail.svg";

const initialCards = [
  { img: card2, id: 1 },
  { img: card2, id: 2 },
  { img: card3, id: 3 },
  { img: card3, id: 4 },
  { img: card4, id: 5 },
  { img: card4, id: 6 },
  { img: card5, id: 7 },
  { img: card5, id: 8 },
  { img: card8, id: 9 },
  { img: card8, id: 10 },
];

// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [score, setScore] = useState(0);
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted && !timer) {
      setTimer(
        setInterval(() => {
          setElapsedTime((elapsedTime) => elapsedTime + 1);
        }, 1000)
      );
    }

    if (matchedIndices.length === cards.length) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameStarted, timer, matchedIndices, cards.length]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex].img === cards[secondIndex].img) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
        setFlippedIndices([]);
        setScore((score) => score + 10);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setScore((score) => score - 5); // Allow score to go below 0
        }, 1000);
      }
    }
  }, [flippedIndices, cards, matchedIndices, score]);

  const handleCardClick = (index) => {
    if (
      !flippedIndices.includes(index) &&
      !matchedIndices.includes(index) &&
      flippedIndices.length < 2
    ) {
      if (!gameStarted) {
        setGameStarted(true);
      }

      setFlippedIndices([...flippedIndices, index]);
      setFlips((flips) => flips + 1);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1>Memory Marvel</h1>
      </div>
      <div style={{ display: "flex" }}>
        <Info image={image} text={`Score: ${score}`} />
        <Info image={image2} text={`Flips: ${flips}`} />
        <Info
          image={image3}
          text={`Timer: ${Math.floor(elapsedTime / 60)}:${(
            elapsedTime % 60
          ).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}`}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 2fr)",
          gap: "10px",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            isFlipped={
              flippedIndices.includes(index) || matchedIndices.includes(index)
            }
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
