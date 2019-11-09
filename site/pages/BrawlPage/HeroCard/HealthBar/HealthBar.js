import React from 'react'
import cx from 'classnames'

import s from './HealthBar.scss'


const HealthBar = ({ className, current, total }) => (
  <div className={cx(s.healthBar, className)}>
    <div className={s.barContainer}>
      <div className={s.bar} style={{ width: `${current < 0 ? 0 : current * 100 / total}%` }} />
    </div>
    <div className={s.values}>{current < 0 ? 0 : current} / {total}</div>
  </div>
)


export default HealthBar
