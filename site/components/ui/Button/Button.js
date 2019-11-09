import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import s from './Button.scss'


const Button = ({ children, className, disabled, onClick }) => {
  const buttonClassName = cx(s.button, className, {
    [s.disabled]: disabled,
  })

  return (
    <div className={buttonClassName} onClick={onClick}>{children}</div>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}


export default Button
