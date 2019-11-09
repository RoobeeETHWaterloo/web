import React, { createContext, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'


export const RadioGroupContext = createContext(null)

const RadioGroup = ({ children, className, name, initialValue }) => {
  const [ value, setValue ] = useState(initialValue)

  const handleChange = useCallback((event) => {
    const { value } = event.target

    setValue(value)
  }, [])

  const context = useMemo(() => ({
    name,
    activeValue: value,
    onChange: handleChange,
  }), [ name, value, handleChange ])

  return (
    <RadioGroupContext.Provider value={context}>
      <div className={className}>
        {
          typeof children === 'function' ? children({ value }) : children
        }
      </div>
    </RadioGroupContext.Provider>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.any,
}


export default RadioGroup
