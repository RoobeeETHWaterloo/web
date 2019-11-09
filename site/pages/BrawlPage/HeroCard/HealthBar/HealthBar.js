import React from 'react'

import s from './HealthBar.scss'


const HealthBar = ({ current, total }) => (
  <div className={s.healthBar}>
    <div className={s.values}>{current} / {total}</div>
    <div className={s.bar} style={{ width: `${current * 100 / total}%` }} />
  </div>
)


export default HealthBar
