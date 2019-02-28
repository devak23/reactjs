import React from 'react';

class WeatherWidget extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='input-field'>
              <input id='city' type='text' placeholder='Enter a city' />
            </div>
          </div>
          <div className='col s12 m6'>
            <p>What's the weather like?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
