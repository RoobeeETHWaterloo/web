import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import s from './Action.scss'


const Action = ({ icon, isActive, onClick }) => {
  const actionClassName = cx(s.action, {
    [s.active]: isActive,
  })

  return (
    <div className={actionClassName} onClick={onClick}>
      <img className={s.icon} src={icon} alt="" />
    </div>
  )
}

Action.propTypes = {
  title: PropTypes.string,
}


export default Action
