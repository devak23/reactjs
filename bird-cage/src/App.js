import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = "";
  };


  render() {
    const {BirdStore} = this.props;

    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
          <div className="col-md-4 col-lg-4">
            <div className="App">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group">
                  <label>Enter a bird:</label>
                  <input type="text" className="form-control" ref={input => this.bird = input} />
                  <p/>
                  <button className="btn btn-primary">Add Bird</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <h3>You have {BirdStore.birdCount} birds.</h3>
            <ul>
              { BirdStore.birds.map( (bird, index) => (
                <li key={index}> {bird} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
