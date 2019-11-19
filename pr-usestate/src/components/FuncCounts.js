import React from 'react';

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

  return (
    <>
      <h4>FuncCounts</h4>
      <div>Count A: {counts.countA}</div>
      <div>Count B: {counts.countB}</div>
      <button onClick={incA}>
        Increment A
      </button>
      <button onClick={incB}>
        Increment B
      </button>
      <button onClick={badlyIncA}>
        Badly Inc A
      </button>
    </>
  )
}

export default FuncCounts;