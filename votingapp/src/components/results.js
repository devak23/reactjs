import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  store = this.props.store;

  calculatePercentage = tech => {
    const { angular, react, vuejs } = this.store.getState();
    return tech <= 0 ? 0 : tech / (angular + react + vuejs) * 100;
  };

  votesAngularInPercent = () =>
    this.calculatePercentage(this.store.getState().angular);

  votesReactInPercent = () =>
    this.calculatePercentage(this.store.getState().react);

  votesVueJsInPercent = () =>
    this.calculatePercentage(this.store.getState().vuejs);

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
          Angular: {`${this.votesReactInPercent().toFixed(2)}%`}
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
