import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './Usage.scss'

import img1 from './images/img-3.png'
import img2 from './images/img-2.png'
import img3 from './images/img-1.png'


const items = [
  { image: img1, title: 'CryptoKitties' },
  { image: img2, title: 'Axies' },
  { image: img3, title: 'MLB Champions' },
]

const Usage = () => (
  <Section className={s.section}>
    <SectionTitle>Using CryptoBrawl you can join a fight with:</SectionTitle>
    <div className={s.items}>
      {
        items.map(({ image, title }, index) => (
          <div key={index} className={s.itemContainer}>
            <div className={s.item}>
              <img className={s.itemImage} src={image} alt="" />
              <div className={s.itemTitle}>{title}</div>
            </div>
          </div>
        ))
      }
    </div>
    <div className={s.text}>or literally any ERC721 you own to beat somebodies asses!</div>
  </Section>
)


export default Usage
