import React, { Component } from 'react';
import IGreet from './igreet';

class JapaneseGreeter extends Component<IGreet> {
  getGreetings(username: string): string {
    return `こんにちは ${username}! お元気ですか `;
  }

  public render() {
    let message = this.getGreetings(this.props.toGreet);
    return (
      <p>
        <div className='purple'>
          Hi! I'm {this.props.name} - {message}
        </div>
      </p>
    );
  }
}

export default JapaneseGreeter;
