import React, { Component } from 'react';
import IGreet from './igreet';

class JapaneseGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `こんにちは ${username}! お元気ですか `;
  }

  public render() {
    let message = this.greetPerson('Soham');
    return <div>A Japanese would say - {message}</div>;
  }
}

export default JapaneseGreeter;
