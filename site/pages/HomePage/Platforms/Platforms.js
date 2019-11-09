import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './Platforms.scss'

import metamaskImage from './images/metamask.png'
import torusImage from './images/torus.png'


const items = [
  { image: metamaskImage, title: 'Sign up with metamask' },
  { image: torusImage, title: 'Sign up with Torus' },
]

const Platforms = () => (
  <Section>
    <SectionTitle>We provide interoperability between NFT Platforms</SectionTitle>
    <div className={s.items}>
      {
        items.map(({ image, title }, index) => (
          <div key={index} className={s.itemContainer}>
            <div className={s.item}>
              <div className={s.imageContainer}>
                <img className={s.itemImage} src={image} alt="" />
              </div>
              <div className={s.itemTitle}>{title}</div>
            </div>
          </div>
        ))
      }
    </div>
  </Section>
)


export default Platforms
