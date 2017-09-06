import React, { Component } from 'react';
import './App.css';
import MessagePane from './MessagePane';


const userMessages = [
  {
    id: 1,
    text: 'hi',
    author: 'Ben',
    channel_id: 1
  },
  {
    id: 2,
    text: 'hi to you too',
    author: 'Jen',
    channel_id: 1
  },
  {
    id: 3,
    text: 'hi from another channel',
    author: 'Meg',
    channel_id: 2
  },
  {
    id: 4,
    text: 'hi to you too from another channel',
    author: 'Jeff',
    channel_id: 2
  }
];

const channels = [
  { id: 1, name: 'General room' },
  { id: 2, name: 'Birthday celebration' },
  { id: 3, name: 'Watercooler conversation' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: userMessages
    };
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage = (author, text) => {
    const newMessage = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      text, // equivalent to text: text,
      author, // equivalent to author: author,
      channel_id: 1
    };

    const messages = [...this.state.messages, newMessage]; // new way of array concatenation in ES6
    //this.state.messages.push(newMessage);
    this.setState({messages});
  };

  render() {
    return (
      <div className="App">
        <MessagePane chatMessages={this.state.messages} onSendMessage={this.onSendMessage}/>
        {/*<MessagePane/>*/}
      </div>
    );
  }
}

export default App;
