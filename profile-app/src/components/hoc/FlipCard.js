import React from 'react';
import "./FlipCard.css";

const FlipCard = (FrontComponent, BackComponent) => {
  return function (props) {
    return (
      <div className="flipContainer">
        <div className="theCard">
          <div className="theFront">
            <FrontComponent {...props} />
          </div>
          <div className="theBack">
            <BackComponent {...props} />
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;