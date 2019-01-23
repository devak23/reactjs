import React from 'react';

const style = {
  background: '#f8d7da',
  color: '#721c24',
  height: 30,
  width: 220,
  margin: 'auto',
  textAlign: '',
  padding: 5,
  border: '1px solid #f8d7da',
  borderRadius: 5
};

const InLineMessage = ({ message }) => {
  return <span style={style}>{message}</span>;
};

export default InLineMessage;
