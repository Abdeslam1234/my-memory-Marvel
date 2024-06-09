import React from "react";
import Card from "./component/Card";

import card1 from "./assets/icons/timer.svg";
import card2 from "./assets/icons/airplane.svg";
import card3 from "./assets/icons/bath-tub.svg";
import card4 from "./assets/icons/hotel.svg";
import card5 from "./assets/icons/surf.svg";
import card6 from "./assets/icons/number.svg";
import card7 from "./assets/icons/emoji.svg";
import card8 from "./assets/icons/cocktail.svg";
import card9 from "./assets/icons/play.svg";
import card10 from "./assets/icons/stars-empty.svg";

function Cards() {
  return (
    <div>
      <Card card={card1} />
      <Card card={card2} />
      <Card card={card3} />
      <Card card={card4} />
      <Card card={card5} />
      <Card card={card6} />
      <Card card={card7} />
      <Card card={card8} />
      <Card card={card9} />
      <Card card={card10} />
    </div>
  );
}

export default Cards;
