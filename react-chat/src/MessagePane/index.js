import React from 'react';
import './index.css';

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

const MessagePane = ({chatMessages}) => (
  <ListOfMessages messages={chatMessages} />
);

export default MessagePane;