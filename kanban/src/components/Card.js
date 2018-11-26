import React from "react";
import CheckList from "./CheckList";

class Card extends React.Component {
  state = {
    showDetails: false
  };

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });

  render() {
    let cardDetails;

    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    let sideColor = {
      position: "absolute",
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div
          className={
            this.state.showDetails
              ? "card__title card_title--is-open"
              : "card__title"
          }
          onClick={this.toggleDetails}
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
