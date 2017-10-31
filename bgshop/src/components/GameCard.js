import React from "react";

const GameCard = () => (
  // Emmet code used: explanation of what the code expands to
  // .ui.card>.image+.content:
  //      Define a div with classes ui, card which consists of 2 sections image & content. Inside the image we
  //      will have board game cover and inside the content, its description
  // span.ui.green.ribbon.label+img:
  //      Define a span with classes "ui green label". This is price label and an image tag
  // a.header+.meta>i.icon.users+i.icon.wait:
  //      Content section consists of header and meta block that will have 2 icons for number of players and duration.
  //      so we use i tag with classes icon users and i.icon.wait
  //

  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$19.99</span>
      <img
        src="https://portal.battleon.com/images/store/ult-card-big.png"
        alt="Game Cover"
      />
    </div>
    <div className="content">
      <a href="" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" /> 2-4 players&nbsp;
        <i className="icon wait" /> 60 mins
      </div>
    </div>
  </div>
);

export default GameCard;
