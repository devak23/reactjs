import React, { useReducer, useState } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import Title from './Title';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import uuid from 'react-uuid';

const reducer = (items, action) => {
  switch (action.type) {
    case 'add':
      return [...items, {
        id: uuid(),
        name: action.name
      }];
    case 'remove':
      return items.filter((_, index) => index !== action.index);
    case 'clear':
      return [];
    default:
      return items;
  }
}

const ShoppingList = () => {
  const [text, setText] = useState('');
  const [items, dispatch] = useReducer(reducer, []);

  const isEmpty = (element) => element.length === 0 || element.trim().length === 0

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(text)) {
      dispatch({
        type: 'add',
        name: text
      });
      setText('');
    }
  }


  const handleOnChange = (e) => setText(e.target.value);

  const handleClearList = (e) => {
    dispatch({
      type: 'clear',
    });
    setText('');
  }

  const classes = commonStyles();
  return (
    <div className={classes.border}>
      <Title>Shopping List</Title>
      <p>This is our shopping cart. Please add some items</p>
      <form onSubmit={handleSubmit}>
        <TextField label='Add an item' onChange={handleOnChange} value={text} />
        {items.length !== 0 &&
          <IconButton component='span' color='primary' onClick={handleClearList}>
            <DeleteSweep />
          </IconButton>
        }
      </form>
      <ul>
        {items.map((item, index) =>
          <li key={item.id}>
            {item.name}
            <IconButton component='span' color='primary' onClick={(index) => dispatch({
              type: 'remove',
              index
            })}>
              <DeleteIcon />
            </IconButton>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;