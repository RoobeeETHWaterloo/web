import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './WhatIsNext.scss'

import checkmarkIcon from './images/checkmark.svg'


const items = [
  'Bridge between Skale and Ethereum',
  'Skill system',
  'Advanced game mechanics',
  'Oracles / Validation system',
]

const WhatIsNext = () => (
  <Section className={s.section}>
    <SectionTitle>What’s next</SectionTitle>
    <div className={s.subTitle}>Now we’re working on</div>
    <div className={s.items}>
      {
        items.map((item, index) => (
          <div key={index} className={s.itemContainer}>
            <div className={s.item}>
              <img className={s.icon} src={checkmarkIcon} alt="" />
              {item}
            </div>
          </div>
        ))
      }
    </div>
    <div className={s.moreText}>And many more... <span className={s.icon}>🤗</span></div>
  </Section>
)


export default WhatIsNext
