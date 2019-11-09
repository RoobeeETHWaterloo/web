import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import s from './Action.scss'


const Action = ({ children, isActive, onClick }) => {

  return (
    <div className={cx(s.action, { [s.active]: isActive })} onClick={onClick}>
      <div className={s.icon} />
      {children}
    </div>
  )
}

Action.propTypes = {
  title: PropTypes.string,
}


export default Action
