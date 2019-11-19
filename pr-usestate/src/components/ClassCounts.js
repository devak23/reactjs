import React from 'react';
import { Button } from '@material-ui/core';

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
        <div style={{ padding: 10 }}>Count A: {counts.countA}</div>
        <div style={{ padding: 10 }}>Count B: {counts.countB}</div>
        <Button color='primary' variant='contained' style={{ marginLeft: 2, marginRight: 2 }} onClick={this.incrementA}>Increment A</Button>
        <Button color='primary' variant='contained' style={{ marginLeft: 2, marginRight: 2 }} onClick={this.incrementB}>Increment B</Button>
        <Button color='primary' variant='contained' style={{ marginLeft: 2, marginRight: 2 }} onClick={this.badlyIncA}>Badly Increment A</Button>
      </>
    )
  }
}

export default ClassCounts;