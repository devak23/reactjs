import React, { Component } from 'react';
import IGreet from './igreet';

class GermanGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `Hallo ${username}! Wie geht es dir?`;
  }

  public render() {
    let message = this.greetPerson('Manik');
    return <div>A german would say - {message}</div>;
  }
}

export default GermanGreeter;
