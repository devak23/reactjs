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
  render() {
    return (
      <div className="App">
        <MessagePane chatMessages={userMessages}/>
      </div>
    );
  }
}

export default App;
