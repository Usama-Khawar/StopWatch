import React from 'react'
import style from './buttonGroup.module.css'
import Button from './Button'

const ButtonGroup = ({
  onStart,
  onPauseResume,
  onStop,
  isPaused,
  isActive,
}) => {
  const StartButton = (
    <Button classes={style.btn} onClick={onStart} value='Start' />
  )
  const ActiveButtons = (
    <div className={style.btnGrp}>
      <Button
        classes={`${style.btn} ${style.btnRestart}`}
        onClick={onStop}
        value='Stop'
      />
      <Button
        classes={`${style.btn} ${style.btn2}`}
        onClick={onPauseResume}
        value={isPaused ? 'Resume' : 'Pause'}
      />
    </div>
  )

  return (
    <div>
      <div>{isActive ? ActiveButtons : StartButton}</div>
    </div>
  )
}

export default ButtonGroup
