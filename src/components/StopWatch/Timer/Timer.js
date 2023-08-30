import React from 'react'
import style from './timer.module.css'
import TimeBox from './TimeBox/TimeBox'

const Timer = ({ time }) => {
  const minutes = Math.floor((time / 60000) % 60)
  const seconds = Math.floor((time / 1000) % 60)

  return (
    <div className={style.timer}>
      <TimeBox value={minutes} classes={style.digits} />
      <span className={style.colon}>:</span>
      <TimeBox value={seconds} classes={style.digits} />
    </div>
  )
}

export default Timer
