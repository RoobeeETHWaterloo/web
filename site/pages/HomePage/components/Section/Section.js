import React from 'react'
import cx from 'classnames'

import s from './Section.scss'


const Section = ({ children, className, fullHeight }) => (
  <div className={cx(s.section, className, { [s.fullHeight]: fullHeight })}>{children}</div>
)


export default Section
