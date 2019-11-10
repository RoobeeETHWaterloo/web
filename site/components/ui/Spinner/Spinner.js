import React from 'react'
import cx from 'classnames'

import s from './Spinner.scss'


const Spinner = ({ className, big, small }) => (
  <div className={cx(s.spinner, className, { [s.big]: big, [s.standard]: !big && !small, [s.small]: small })}>
    <div className={s.circle} />
    <div className={s.circle} />
  </div>
)


export default Spinner
