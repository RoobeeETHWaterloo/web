import React from 'react'

import s from './WithLove.scss'

import ethIcon from './images/eth.svg'


const WithLove = () => (
  <div className={s.section}>
    <div className={s.title}>Made with <span>❤️</span> on</div>
    <img className={s.icon} src={ethIcon} alt="ETHWaterloo 2019" />
  </div>
)


export default WithLove
