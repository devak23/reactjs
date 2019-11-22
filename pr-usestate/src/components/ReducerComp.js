import React, { useReducer } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import { Button } from '@material-ui/core';

const ReducerComp = ({ value }) => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, value);

  const classes = commonStyles();

  return (
    <div className={classes.border}>
      <p>{sum}</p>
      <Button variant='contained' color='secondary' onClick={() => dispatch(1)}>+ 1</Button>
    </div>
  )
}

export default ReducerComp;