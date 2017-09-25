import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { voteAngular, voteReact, voteVueJS } from './actions';

class App extends Component {
  handleVoteAngular = () => {
    this.props.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.props.store.dispatch(voteReact());
  };

  handleVoteVueJS = () => {
    this.props.store.dispatch(voteVueJS());
  };

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: 'center' }}>
          <h2>What is your favorite frontend framework in 2017?</h2>
          <h4>Click on the logos below to vote</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <a onClick={this.handleVoteAngular} role="link" tabIndex="0">
                <img src="./angular_logo.png" height="96" alt="Angular Logo" />
              </a>
            </div>
            <div className="col-xs-2">
              <a onClick={this.handleVoteReact} role="link" tabIndex="0">
                <img src="./react_logo.png" height="96" alt="React Logo" />
              </a>
            </div>
            <div className="col-xs-2">
              <a onClick={this.handleVoteVueJS} role="link" tabIndex="0">
                <img src="./vuejs_logo.png" height="96" alt="VueJs Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
