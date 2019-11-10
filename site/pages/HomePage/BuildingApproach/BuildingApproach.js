import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './BuildingApproach.scss'

import ethereumImage from './images/ethereum.png'
import skaleImage from './images/skale.png'
import torusImage from '../Platforms/images/torus.png'
import metamaskImage from '../Platforms/images/metamask.png'


const items = [
  { image: ethereumImage, title: 'Ethereum as a main blockchain' },
  { image: skaleImage, title: 'SKALE as a platform for a battleground functioning' },
  { image: torusImage, title: 'Torus for a convenient log-in' },
  { image: metamaskImage, title: 'MetaMask as a common way to log-in' },
]

const BuildingApproach = () => (
  <Section className={s.section}>
    <SectionTitle>Buidling Approach</SectionTitle>
    <div className={s.items}>
      {
        items.map(({ image, title }, index) => (
          <div key={index} className={s.itemContainer}>
            <div className={s.item}>
              <div className={s.itemTitle}>{title}</div>
              <img className={s.itemImage} src={image} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  </Section>
)


export default BuildingApproach
