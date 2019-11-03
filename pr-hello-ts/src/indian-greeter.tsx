import React, { Component } from 'react';
import IGreet from './igreet';

type Props = {
  name: string;
};

class IndianGreeter extends Component implements IGreet {
  greetPerson(username: string): string {
    return `Namaste ${username}. Aap kaise ho?`;
  }

  public render() {
    let message = this.greetPerson('Abhay');
    return <div>An Indian would say - {message}</div>;
  }
}

export default IndianGreeter;
