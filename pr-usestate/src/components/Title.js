import React from 'react';
import { commonStyles } from '../utils/StyleHelper';

const Title = ({ title }) => {
  const classes = commonStyles();

  return (
    <div className={`${classes.border} ${classes.label}`}>{title}</div>
  )
}

export default Title;