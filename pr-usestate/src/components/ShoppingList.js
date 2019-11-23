import React, { useReducer, useState } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import Title from './Title';
import { TextField } from '@material-ui/core';
import uuid from 'react-uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, {
        id: uuid(),
        name: action.name
      }];
    default:
      return state;
  }
}

const ShoppingList = () => {
  const [text, setText] = useState('');
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: text
    });
    setText('');
  }

  const handleOnChange = (e) => setText(e.target.value);

  const classes = commonStyles();
  return (
    <div className={classes.border}>
      <Title>Shopping List</Title>
      <p>This is our shopping cart. Please add some items</p>
      <form onSubmit={handleSubmit}>
        <TextField label='Add an item' onChange={handleOnChange} value={text} />
      </form>
      <ul>
        {
          items.map((item, index) =>
            <li key={item.id}>
              {item.name}
            </li>
          )}
      </ul>
    </div>
  );
}

export default ShoppingList;