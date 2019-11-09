import React from 'react'
import PropTypes from 'prop-types'

import Action from './Action/Action'

import s from './Actions.scss'


const Actions = ({ items, values, onChange }) => {

  return (
    <div className={s.actions}>
      {
        items.map(({ title, value }) => {
          const isActive = values.includes(value)

          return (
            <Action
              key={value}
              isActive={isActive}
              onClick={() => onChange(value)}
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
