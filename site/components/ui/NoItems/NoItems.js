import React from 'react'

import s from './NoItems.scss'

import notFoundIcon from './images/404.svg'


const NoItems = ({ title = 'Nothing to show here', subTitle = '' }) => (
  <div className={s.noItems}>
    <img className={s.icon} src={notFoundIcon} alt="" />
    <div className={s.title}>{title}</div>
    {
      Boolean(subTitle) && (
        <div className={s.subTitle}>{subTitle}</div>
      )
    }
  </div>
)


export default NoItems
