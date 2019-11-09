import React from 'react'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'

import s from './ItMakesSense.scss'

const items = [
  'We build CRYPTOBRAWL using Skale - a side-chain solution. Now you wouldn’t pay tons of money for gas if you want to play more in a fast operating side-chain environment',
  'CRYPTOBRAWL is all about cooperation. You can meet and fight almost any of the ERC721 Token',
  'We don’t store your ERC721. You’re accessing to the functionality using MetaMask or Torus',
  'It’s not about just fun. We’re empowering NFT/ERC721 community',
]

const ItMakesSense = () => (
  <Section>
    <SectionTitle>Why it makes sense</SectionTitle>
    <div className={s.items}>
      {
        items.map((item, index) => (
          <div key={index} className={s.itemContainer}>
            <div className={s.item}>
              {item}
            </div>
          </div>
        ))
      }
    </div>
  </Section>
)


export default ItMakesSense
