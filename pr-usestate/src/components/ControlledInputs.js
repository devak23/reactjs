import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { commonStyles } from '../utils/StyleHelper'

const ControlledInputs = () => {
  const [inputRef, setInputRef] = React.useState(null);
  const [text, setText] = React.useState('This text is from state');

  const handleOnChange = e => {
    //console.log(e)
    // if you comment the line below, 
    setText(e.target.value);
  }

  useEffect(() => {
    //inputRef.current.focus();
  });

  const classes = commonStyles();
  return (
    <div className={classes.border}>
      <TextField
        variant='outlined'
        margin='normal'
        type='text'
        value={text}
        onChange={handleOnChange}
        ref={tf => setInputRef(tf)} />
      <p>You typed: {text}</p>
    </div>
  )
}

export default ControlledInputs;