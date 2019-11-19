import React from 'react';
import { Button } from '@material-ui/core';
import { commonStyles } from '../utils/StyleHelper';

const FuncCounts = () => {
  const [counts, setCounts] = React.useState({
    countA: 0,
    countB: 0
  });

  const incA = () => setCounts(cnts => ({ ...counts, countA: cnts.countA + 1 }))

  const incB = () => setCounts(cnts => ({ ...counts, countB: cnts.countB + 1 }))

  const badlyIncA = () => setCounts({
    countA: counts.A + 1
  })

  let classes = commonStyles();
  return (
    <>
      <h4>FuncCounts</h4>
      <div style={{ padding: 10 }}>Count A: {counts.countA}</div>
      <div style={{ padding: 10 }}>Count B: {counts.countB}</div>
      <Button variant='contained' color='secondary' className={classes.spacing} onClick={incA}>
        Increment A
      </Button>
      <Button variant='contained' color='secondary' className={classes.spacing} onClick={incB}>
        Increment B
      </Button>
      <Button variant='contained' color='secondary' className={classes.spacing} onClick={badlyIncA}>
        Badly Inc A
      </Button>
    </>
  )
}

export default FuncCounts;