import React from "react";

function Info({ text, image }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        width: "170px",
        height: "40px",
        borderRadius: "20px",
        justifyContent: "center",
        margin: "40px",
      }}
    >
      <div
        // className="img"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "white",
          position: "relative",
          right: "80px",
          top: "-5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "40px",
          }}
        />
      </div>
      <div className="text" style={{ textAlign: "center" }}>
        <p style={{ justifyContent: "center" }}>{text}</p>
      </div>
    </div>
  );
}

export default Info;
