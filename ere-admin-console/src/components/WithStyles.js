import React from  'react';
import { createUseStyles } from 'react-jss';

function withStyles(Component, styles, {...rest}) {
  const classes = createUseStyles(styles);
  return function (){ 
    return <Component classes={classes} {...rest}/>
  };
}

export default withStyles;
