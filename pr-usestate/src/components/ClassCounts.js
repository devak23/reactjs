import React from 'react';

class ClassCounts extends React.Component {
  state = {
    counts: {
      countA: 0,
      countB: 0
    }
  }
  constructor() {
    super();
    this.incrementA = this.incrementA.bind(this);
    this.incrementB = this.incrementB.bind(this);
    this.badlyIncA = this.badlyIncA.bind(this);
  }

  incrementA() {
    let cnts = this.state.counts;
    this.setState({
      counts: { ...cnts, countA: cnts.countA + 1 }
    });
  }

  incrementB() {
    let cnts = this.state.counts;
    this.setState({
      counts: { ...cnts, countB: cnts.countB + 1 }
    });
  }

  badlyIncA() {
    this.setState({
      counts: {
        countA: this.state.counts.countA + 1
      }
    });
  }


  render() {
    let counts = this.state.counts;
    return (
      <>
        <h4>ClassCounts</h4>
        <div>Count A: {counts.countA}</div>
        <div>Count B: {counts.countB}</div>
        <button onClick={this.incrementA}>Increment A</button>
        <button onClick={this.incrementB}>Increment B</button>
        <button onClick={this.badlyIncA}>Badly Increment A</button>
      </>
    )
  }
}

export default ClassCounts;