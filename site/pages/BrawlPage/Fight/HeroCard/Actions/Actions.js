import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Action from './Action/Action'

import s from './Actions.scss'


const Actions = ({ title, items, values, rtl, onChange }) => {

  return (
    <div className={s.actions}>
      <div className={s.title}>{title}</div>
      {
        items.map((item) => {
          const { icon, value } = item
          const isActive = values.includes(value)

          return (
            <div key={value} className={cx(s.actionContainer, { [s.rtl]: rtl, [s.active]: isActive })}>
              <Action
                icon={icon}
                isActive={isActive}
                onClick={() => onChange(value)}
              />
            </div>
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
