import React from "react";
import Info from "./Info";
import image1 from "./assets/icons/";
import image2 from "./assets/icons/flip.svg";
import image3 from "./assets/icons/stopwatch.svg";

function Infos() {
  return (
    <div>
      <Info image={image1} texte="scoure" />
      <Info image={image2} texte="flips" />
      <Info image={image3} texte="timer" />
    </div>
  );
}

export default Infos;
