import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { commonStyles } from '../utils/StyleHelper'

const ControlledInputs = () => {
  const tf = React.useRef();
  const [text, setText] = React.useState('Please type something!');

  useEffect(() => {
    tf.current.focus();
    tf.current.select();
  });

  const handleOnChange = e => {
    //console.log(e)
    // if you comment the line below, 
    setText(e.target.value);
  }

  const classes = commonStyles();
  return (
    <div className={classes.border}>
      <TextField type='text' value={text} onChange={handleOnChange} ref={tf} />
      <p>You typed: {text}</p>
    </div>
  )
}

export default ControlledInputs;