import React from 'react'
import cx from 'classnames'

import s from './BrawlResults.scss'


const BrawlResults = ({ positive }) => (
  <div className={cx(s.overlay, { [s.negative]: !positive })}>
    <div className={s.brawlResults}>
      <div className={s.icon}>{positive ? '🎉' : '🤬'}</div>
      <div className={s.title}>What a heck?!</div>
      <div className={s.subTitle}>How could you loose to this weakly?</div>
    </div>
  </div>
)


export default BrawlResults
