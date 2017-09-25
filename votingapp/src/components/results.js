import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  state = {};

  votesAngularInPercent = () =>
    this.props.store &&
    this.props.store.getState().angular /
      (this.props.store.getState().angular +
        this.props.store.getState().react +
        this.props.store.getState().vuejs) *
      100;

  votesReactInPercent = () =>
    this.props.store &&
    this.props.store.getState().react /
      (this.props.store.getState().angular +
        this.props.store.getState().react +
        this.props.store.getState().vuejs) *
      100;

  votesVueJsInPercent = () =>
    this.props.store &&
    this.props.store.getState().vuejs /
      (this.props.store.getState().angular +
        this.props.store.getState().react +
        this.props.store.getState().vuejs) *
      100;

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
