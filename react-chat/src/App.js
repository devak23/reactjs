import React, {Component} from 'react';
import './App.css';
import MessagePane from './MessagePane';
import ChannelList from './ChannelList';
import { getMessages, getChannels, saveMessage } from "./remote_storage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      channels: [],
      selectedChannelId: 0
    };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onChannelSelect = this.onChannelSelect.bind(this);
    this.filteredMessages = this.filteredMessages.bind(this);
  }

  // initializing data here. This method is invoked as a part of the life
  // cycle of react
  componentDidMount() {
    console.log('loading channels...');
    getChannels().then(channels => this.setState({channels, selectedChannelId: channels[1].id}));

    console.log('loading messages...');
    getMessages().then(messages => this.setState({messages}));
  }

  onSendMessage = (author, text) => {
    const newMessage = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      text, // equivalent to text: text,
      author, // equivalent to author: author,
      channel_id: this.state.selectedChannelId
    };

    saveMessage(newMessage);

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
