import React, { useEffect } from 'react'
import cx from 'classnames'

import s from './ActionAnimation.scss'

import swordIcon from './images/sword.svg'


const ActionAnimation = ({ children, active }) => {

  return (
    <div className={s.actionContainer}>
      {
        active && (
          <img className={cx(s.actionIcon, s.sword)} src={swordIcon} alt="" />
        )
      }
      {children}
    </div>
  )
}


export default ActionAnimation
