import React from 'react'
import ClassCounts from './ClassCounts'
import FuncCounts from './FuncCounts'
import { commonStyles } from '../utils/StyleHelper'

const Counts = () => {
  const classes = commonStyles();

  return (
    <div className={`${classes.border}`}>
      <ClassCounts />
      <FuncCounts />
    </div >
  )
}
export default Counts;