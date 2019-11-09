import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { RadioGroupContext } from '../RadioGroup/RadioGroup'

import s from './RadioContainer.scss'


const RadioContainer = (props) => {
  const { children, className, value } = props
  const { activeValue, name, onChange } = useContext(RadioGroupContext)

  const nodeProps = {
    className: s.input,
    type: 'radio',
    value,
    name,
    checked: activeValue === value,
    onChange,
  }

  return (
    <label className={className}>
      <input {...nodeProps} />
      {children}
    </label>
  )
}

RadioContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}


export default RadioContainer
