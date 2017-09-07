import React, { Component } from 'react';
import './App.css';
import MessagePane from './MessagePane';
import ChannelList from './ChannelList';


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
  { id: 3, name: 'Watercooler conversation' }
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: userMessages,
      channels,
      selectedChannelId: channels[0].id
    };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onChannelSelect = this.onChannelSelect.bind(this);
    this.filteredMessages= this.filteredMessages.bind(this);
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

  onChannelSelect = (id) => {
    this.setState({
      selectedChannelId: id
    });
  };

  filteredMessages = () => {
    return this.state.messages.filter((channel) => channel.channel_id === this.state.selectedChannelId);
  };

  render() {
    return (
      <div className="App">
        <ChannelList
            channels={this.state.channels}
            selectedChannel={this.state.selectedChannelId}
            onSelect={this.onChannelSelect}
        />
        <MessagePane
            chatMessages={this.filteredMessages()}
            onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
