import React, { Component } from 'react';
import IGreet from './igreet';

class EnglishGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `Hello ${username}! How are you doing today?`;
  }

  public render() {
    let message = this.greetPerson('Pralhad');
    return <div>An Englishman would say - {message}</div>;
  }
}
export default EnglishGreeter;
