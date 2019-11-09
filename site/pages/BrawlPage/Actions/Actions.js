import React from 'react'
import PropTypes from 'prop-types'

import Action from './Action/Action'

import s from './Actions.scss'


const Actions = ({ children, items, values, onChange }) => {

  return (
    <div className={s.actions}>
      {
        items.map((item) => {
          const { title, value } = item
          const isActive = values.includes(value)

          const node = (
            <Action
              key={value}
              isActive={isActive}
              onClick={() => onChange(value)}
            >
              {title}
            </Action>
          )

          if (typeof children === 'function') {
            return children(item, node)
          }

          return node
        })
      }
    </div>
  )
}

Actions.propTypes = {
  onChange: PropTypes.func.isRequired,
}


export default Actions
