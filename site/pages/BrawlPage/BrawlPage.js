import React from 'react'

import HeroCard from './HeroCard/HeroCard'
import Actions from './Actions/Actions'

import s from './BrawlPage.scss'


const BrawlPage = () => (
  <div className={s.page}>
    <div className={s.content}>
      <div className={s.col}>
        <HeroCard />
        <Actions onChange={() => {}} />
      </div>
      <div className={s.col}>
        <HeroCard rtl />
        <Actions onChange={() => {}} />
      </div>
    </div>
  </div>
)


export default BrawlPage
