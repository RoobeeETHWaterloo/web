import React from 'react'
import cx from 'classnames'

import s from './Card.scss'


const Card = ({ children, className }) => (
  <div className={cx(s.card, className)}>
    {children}
  </div>
)


export default Card
