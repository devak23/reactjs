import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Form from "./Form";

const Message = ({author, text}) => (
  <div className="Message">
    <div className="Message-author">{author}</div>
    <div className="Message-text">{text}</div>
  </div>

);

const ListOfMessages = ({messages}) => (
  <div className="MessagePane-List">
    { messages.map(({author, text, id}) => <Message key={id} author={author} text={text}/>)}
  </div>
);

const MessagePane = ({chatMessages, onSendMessage}) => (
  <div className="MessagePane">
    <ListOfMessages messages={chatMessages} />
    <Form onSend={onSendMessage}/>
  </div>
);

// This is one way to tell the consumer of the MessagePane that the MessagePane
// expects messages parameter which is an array
MessagePane.propTypes = {
  chatMessages: PropTypes.array.isRequired
};

MessagePane.defaultProps = {
  chatMessages: [{
    id: -99,
    text: 'MessagePane needs to be initialized with an array of messages',
    author: 'INVALID!',
    channel_id: -99
  }]
};

export default MessagePane;