import React, { useReducer } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import Title from './Title';
import { Button } from '@material-ui/core';

const ReducerComp = ({ value }) => {
  const [sum, dispatch] = useReducer((oldValue, newValue) => {
    return oldValue + newValue;
  }, value);

  const classes = commonStyles();

  return (
    <div className={classes.border}>
      <Title title='Reducer Example' />
      <p>{sum}</p>
      <Button variant='contained' color='secondary' onClick={() => dispatch(1)}>+ 1</Button>
    </div>
  )
}

export default ReducerComp;