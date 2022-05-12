import React from "react";
import "./content2.css";
import img1 from "./pics/Death_TradingCard.jpg";
import img2 from "./pics/Terror_TradingCard.jpg";
import img3 from "./pics/Voltage_TradingCard.jpg";

const Content2 = () => {
  return (
    <div className="content2">
    <h2 style={{'textAlign':'center'}}>Cards</h2>
      <div className="card-container">
        <img src={img1} alt="death" />
        <img src={img2} alt="drake" />
        <img src={img3} alt="storm" />
      </div>
    </div>
  );
};

export default Content2;
