import React, { Component } from 'react';
import IGreet from './igreet';

class GermanGreeter extends Component<IGreet> {
  greetPerson(username: string): string {
    return `Hallo ${username}! Wie geht es dir?`;
  }

  public render() {
    let message = this.greetPerson(this.props.toGreet);
    return (
      <p>
        <div className='green'>
          Hi! I'm {this.props.name} - {message}
        </div>
      </p>
    );
  }
}

export default GermanGreeter;
