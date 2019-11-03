import React, { Component } from 'react';
import IGreet from './igreet';

class JapaneseGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `こんにちは ${username}! お元気ですか `;
  }

  public render() {
    let message = this.greetPerson('Soham');
    return (
      <p>
        <div className='purple'>A Japanese would say - {message}</div>
      </p>
    );
  }
}

export default JapaneseGreeter;
