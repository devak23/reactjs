import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const FuncOneTimeButton = ({ label, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();

    // no more clicking
    setClicked(true);
  }

  return (
    <Button color='primary' variant='contained' onClick={handleClick} disabled={clicked}>
      {label}
    </Button>
  );
}

export default FuncOneTimeButton;
