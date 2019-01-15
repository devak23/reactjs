import React, { Component } from 'react';

const style = {
  container: {
    margin: '0 auto',
    padding: 50
  },
  inputField: {
    fontSize: 16,
    width: 90,
    textAlign: 'center',
    height: 50,
    padding: 5,
    margin: 5,
    border: '1px solid #EEE',
    borderRadius: 3
  },
  btn: {
    background: '#0072ff',
    color: '#fff',
    fontSize: 16,
    width: 150,
    height: 54,
    padding: 5,
    margin: 5,
    border: 'none',
    borderRadius: 3
  },
  result: {
    border: '10px solid red',
    background: '#ccc',
    margin: '0 auto',
    fontSize: 24,
    lineHeight: 4,
    height: 100,
    width: 200,
    color: '#000'
  }
};

class Calculator extends Component {
  state = {
    number1: 12,
    number2: 12,
    result: 24
  };

  calculateResult = () => {
    this.setState({ result: this.state.number1 + this.state.number2 });
  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: Number(value) });
  };

  render() {
    const { number1, number2, result } = this.state;
    return (
      <div style={style.container}>
        <h3>The Calculator</h3>
        <input style={style.inputField} type='text' name='number1' value={number1} onChange={this.handleChange} />
        {' + '}
        <input style={style.inputField} type='text' name='number2' value={number2} onChange={this.handleChange} />
        <p>
          <button style={style.btn} onClick={this.calculateResult}>
            {' = '}
          </button>
        </p>
        <p style={style.result}>{result}</p>
      </div>
    );
  }
}

export default Calculator;
