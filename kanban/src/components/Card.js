import React from "react";
import CheckList from "./CheckList";
import PropTypes from "prop-types";

const titlePropType = (props, propName, componentName) => {
  let value = props[propName];
  if (value && (typeof value !== "string" || value.length > 80)) {
    return new Error(
      `${propName} in ${componentName} is longer than 80 characters`
    );
  }
};

class Card extends React.Component {
  state = {
    showDetails: false
  };

  static propTypes = {
    description: PropTypes.string.isRequired,
    title: titlePropType,
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool
      }).isRequired
    )
  };

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });

  render() {
    let cardDetails;

    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList
            cardId={this.props.id}
            tasks={this.props.tasks}
            taskCallbacks={this.props.taskCallbacks}
          />
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
