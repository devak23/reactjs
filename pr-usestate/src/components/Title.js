import React from 'react';
import { makeStyles } from '@material-ui/core';
import { commonStyles } from '../utils/StyleHelper';

const styles = makeStyles({
  label: {
    float: 'right',
    backgroundColor: '#C0EB6A',
    margin: -11
  }
})

const Title = ({ children }) => {
  const mystyles = styles();
  const classes = commonStyles();

  return (
    <div className={`${classes.border} ${mystyles.label}`}>
      <span>{children}</span>
    </div>
  )
}

export default Title;