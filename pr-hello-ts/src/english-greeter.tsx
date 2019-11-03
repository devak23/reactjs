import React, { Component } from 'react';
import IGreet from './igreet';

class EnglishGreeter extends Component<IGreet> {
  greetPerson(username: string): string {
    return `Hello ${username}! How are you doing today?`;
  }

  public render() {
    let message = this.greetPerson(this.props.toGreet);
    return (
      <p>
        <div className='red'>
          Hi! I'm {this.props.name} - {message}
        </div>
      </p>
    );
  }
}
export default EnglishGreeter;
