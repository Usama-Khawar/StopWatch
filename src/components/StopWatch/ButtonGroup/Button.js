import React from 'react'

const Button = ({ classes = '', onClick, value }) => {
  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
