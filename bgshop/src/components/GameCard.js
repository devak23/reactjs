import React from "react";
import PropTypes from "prop-types";
import PriceInDollars from "./PriceInDollars";
import { Reveal } from "semantic-ui-react";
import Featured from "./Featured";

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

class GameCard extends React.Component {
  state = {};

  toggleDescription = () => console.log("Toggling description");

  render() {
    const { game, toggleFeatured } = this.props;

    return (
      <div className="ui card image">
        <Reveal animated="move">
          <Reveal.Content visible>
            <div className="image">
              <span className="ui green ribbon label">
                <PriceInDollars priceInCents={game.price} />
                {game.price < 3000 && "!"}
              </span>
              <Featured
                featured={game.featured}
                toggleFeatured={toggleFeatured}
                gameId={game.id}
              />
              <img src={game.thumbnail} alt="Game Cover" />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div className="content description">
              <p>{game.description}</p>
            </div>
          </Reveal.Content>
        </Reveal>
        <div className="content description">
          <p>{game.description}</p>
        </div>
        <div className="content">
          <a href="" className="header">
            {game.title}
          </a>
          <div className="meta">
            <i className="icon users" /> {game.players}&nbsp;
            <i className="icon wait" /> {game.duration} min
            <a onClick={this.toggleDescription}>
              <i className="right floated unhide icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired
};

export default GameCard;
