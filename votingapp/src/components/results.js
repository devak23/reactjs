import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  state = {};

  votesAngularInPercent = () => {
    const state = this.props.store.getState();
    return state.angular <= 0
      ? 0
      : state.angular / (state.angular + state.react + state.vuejs) * 100;
  };

  votesReactInPercent = () => {
    const state = this.props.store.getState();
    return state.react <= 0
      ? 0
      : state.react / (state.angular + state.react + state.vuejs) * 100;
  };

  votesVueJsInPercent = () => {
    const state = this.props.store.getState();
    return state.vuejs <= 0
      ? 0
      : state.vuejs / (state.angular + state.react + state.vuejs) * 100;
  };

  progressBarForAngular = () => ({
    width: `${this.votesAngularInPercent()}%`,
  });

  progressBarForReact = () => ({
    width: `${this.votesReactInPercent()}%`,
  });

  progressBarForVueJS = () => ({
    width: `${this.votesVueJsInPercent()}%`,
  });

  render() {
    return (
      <div>
        <span className="label label-primary">
          Angular: {`${this.votesAngularInPercent().toFixed(2)}%`}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-warning"
            style={this.progressBarForAngular()}
          />
        </div>
        <span className="label label-primary">
          React: {`${this.votesReactInPercent().toFixed(2)}%`}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-warning"
            style={this.progressBarForReact()}
          />
        </div>
        <span className="label label-primary">
          VueJS: {`${this.votesVueJsInPercent().toFixed(2)}%`}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-warning"
            style={this.progressBarForVueJS()}
          />
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default Results;
