import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import s from './Button.scss'


const Button = ({ children, className, color = 'standard', to, disabled, onClick }) => {
  const buttonClassName = cx(s.button, className, {
    [s.disabled]: disabled,
    [s[color]]: color,
  })

  return React.createElement(to ? Link: 'div', {
    className: buttonClassName,
    to,
    onClick,
  }, children)
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string, // link
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}


export default Button
