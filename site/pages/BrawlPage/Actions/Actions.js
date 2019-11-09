import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import Action from './Action/Action'

import s from './Actions.scss'


const actions = [
  { title: 'Head', value: 'head' },
  { title: 'Body', value: 'body' },
  { title: 'Tail', value: 'tail' },
]

const Actions = ({ onChange }) => {
  const [ values, setValues ] = useState([])

  const handleSelect = useCallback((value) => {
    let newValues

    if (values.includes(value)) {
      newValues = values.filter((v) => v !== value)

      setValues(newValues)
    }
    else {
      if (values.length > 1) {
        newValues = [ values[1], value ]
      }
      else {
        newValues = [ values[0], value ]
      }

      setValues(newValues)
    }

    onChange(newValues)
  }, [ values ])

  return (
    <div className={s.actions}>
      {
        actions.map(({ title, value }) => {
          const isActive = values.includes(value)

          return (
            <Action
              key={value}
              isActive={isActive}
              onClick={() => handleSelect(value)}
            >
              {title}
            </Action>
          )
        })
      }
    </div>
  )
}

Actions.propTypes = {
  onChange: PropTypes.func.isRequired,
}


export default Actions
