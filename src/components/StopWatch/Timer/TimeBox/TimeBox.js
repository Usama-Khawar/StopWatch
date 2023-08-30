import React from 'react'

const TimeBox = ({ value, classes = '' }) => {
  return <div className={classes}>{('0' + value).slice(-2)}</div>
}

export default TimeBox
