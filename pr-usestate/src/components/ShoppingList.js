import React, { useRef, useReducer } from 'react';
import { commonStyles } from '../utils/StyleHelper';
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
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  }

  const classes = commonStyles();
  return (
    <div className={classes.border}>
      <form onSubmit={handleSubmit}>
        <TextField ref={inputRef} label='Add an item' />
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