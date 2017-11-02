import React from "react";
import PropTypes from "prop-types";
import PriceInDollars from "./PriceInDollars";
import Featured from "./Featured";

const GameCard = ({ game }) => (
  // Emmet code used: explanation of what the code expands to
  // ---------------------------------------------------------
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
      <span className="ui green ribbon label">
        <PriceInDollars priceInCents={game.price} /> {game.price < 3000 && "!"}
      </span>
      <Featured featured={game.featured} />
      <img src={game.thumbnail} alt="Game Cover" />
    </div>
    <div className="content">
      <a href="" className="header">
        {game.title}
      </a>
      <div className="meta">
        <i className="icon users" /> {game.players}&nbsp;
        <i className="icon wait" /> {game.duration} min
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default GameCard;
