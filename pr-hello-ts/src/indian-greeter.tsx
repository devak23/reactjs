import React, { Component } from 'react';
import IGreet from './igreet';

class IndianGreeter extends Component<IGreet> {
  getGreetings(username: string): string {
    return `नमस्ते ${username}. क्या हाल है?`;
  }

  public render() {
    let message = this.getGreetings(this.props.toGreet);
    return (
      <p>
        <div className='blue'>
          Hi! I'm {this.props.name} - {message}
        </div>
      </p>
    );
  }
}

export default IndianGreeter;
