import React from 'react'
import ClassCounts from './ClassCounts'
import FuncCounts from './FuncCounts'
import Title from './Title';
import { commonStyles } from '../utils/StyleHelper'

const Counts = () => {
  const classes = commonStyles();

  return (
    <div className={`${classes.border}`}>
      <Title>Counts</Title>
      <ClassCounts />
      <FuncCounts />
    </div >
  )
}
export default Counts;