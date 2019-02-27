import React from 'react';

const inputStyle = {
  padding: 5,
  width: 287,
  fontSize: 48
};

let cardStyle = {
  width: 300,
  height: 300,
  padding: 5,
  marginTop: 7,
  border: '1px solid #AAABBB'
};

class Card extends React.Component {
  state = {
    background: this.props.color
  };

  handleChange = e => this.setState({ background: e.target.value });

  render() {
    let { background } = this.state;
    let style = { ...cardStyle, background };
    return (
      <div className='container' style={{ width: 320, marginTop: 20 }}>
        <div className='row'>
          <div className='col s12 m12'>
            <div style={style} />
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m12'>
            <input
              style={inputStyle}
              type='text'
              maxLength={7}
              onChange={this.handleChange}
              defaultValue={background}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
