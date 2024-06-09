import React from "react";
import picture from "../assets/icons/card-front.svg";
import "./Card.css";

function Card({ img, isFlipped, onClick }) {
  return (
    <div onClick={onClick}>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={picture} alt="Front" />
          </div>
          <div
            className="flip-card-back"
            style={{
              backgroundColor: "white",
              width: "150px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img src={img} alt="Back" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
