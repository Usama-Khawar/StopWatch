import React, { useEffect, useState } from 'react'
import Timer from './Timer/Timer'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import style from '../StopWatch/stopWatch.module.css'

const StopWatch = () => {
  const [time, setTime] = useState(0)
  const [isActive, setActive] = useState(false)
  const [isPaused, setPause] = useState(true)

  useEffect(() => {
    let intervalId = null
    if (isActive && isPaused === false) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1000)
      }, 1000)
    } else clearInterval(intervalId)
    return () => clearInterval(intervalId)
  }, [isActive, isPaused])

  const startIntervalHandler = () => {
    setActive(true)
    setPause(false)
  }

  const pauseIntervalHandler = () => {
    setPause(!isPaused)
  }

  const stopIntervalHandler = () => {
    setActive(false)
    setTime((prevVal) => 0)
  }

  return (
    <div className={style.stopWatch}>
      <Timer time={time} />
      <ButtonGroup
        onStart={startIntervalHandler}
        onPauseResume={pauseIntervalHandler}
        onStop={stopIntervalHandler}
        isActive={isActive}
        isPaused={isPaused}
      />
    </div>
  )
}

export default StopWatch
