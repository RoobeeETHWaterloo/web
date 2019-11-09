import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './BuildingApproach.scss'

import ethereumImage from './images/ethereum.png'
import skaleImage from './images/skale.png'
import torusImage from '../Platforms/images/torus.png'
import metamaskImage from '../Platforms/images/metamask.png'


const items = [
  { image: ethereumImage, title: 'We use Ethereum as a main blockchain' },
  { image: skaleImage, title: 'We use SKALE as a platform for game functioning' },
  { image: torusImage, title: 'We use Torus for a convenient log-in' },
  { image: metamaskImage, title: 'We use Meta Mask for less convenient but more common log-in' },
]

const BuildingApproach = () => (
  <Section className={s.section}>
    <SectionTitle>We provide interoperability between NFT Platforms</SectionTitle>
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
