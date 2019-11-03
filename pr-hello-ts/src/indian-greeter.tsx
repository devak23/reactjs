import React, { Component } from 'react';
import IGreet from './igreet';

type Props = {
  name: string;
};

class IndianGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `नमस्ते ${username}. क्या हाल है?`;
  }

  public render() {
    let message = this.greetPerson('Abhay');
    return (
      <p>
        <div className='blue'>An Indian would say - {message}</div>
      </p>
    );
  }
}

export default IndianGreeter;
