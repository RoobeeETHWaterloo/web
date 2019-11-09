import React from 'react'

import Char from './Char/Char'

import s from './Chars.scss'


const chars = [
  { id: 1, name: 'Foo', image: 'https://miro.medium.com/max/480/1*OGfTUWooSC2NMqw8x6nn4w@2x.png' },
  { id: 2, name: 'Bar', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1402513.svg' },
  { id: 3, name: 'Zoo', image: 'https://steemitimages.com/0x0/https://i.imgur.com/I9uJYPQ.png' },
  { id: 4, name: 'Foo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1399882.svg' },
  { id: 5, name: 'Bar', image: 'https://steemitimages.com/0x0/https://i.imgur.com/I9uJYPQ.png' },
  { id: 6, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
  { id: 7, name: 'Bar', image: 'https://miro.medium.com/max/480/1*OGfTUWooSC2NMqw8x6nn4w@2x.png' },
  { id: 8, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
  { id: 9, name: 'Foo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1399882.svg' },
  { id: 10, name: 'Bar', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1402513.svg' },
  { id: 11, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
]

const Chars = ({ selectedChar, onSelect }) => {

  return (
    <div className={s.chars}>
      {
        chars.map((item, index) => {
          const isActive = selectedChar && selectedChar.id === item.id

          return (
            <div key={index} className={s.charContainer}>
              <Char {...item} selected={isActive} onClick={() => onSelect(item)} />
            </div>
          )
        })
      }
    </div>
  )
}


export default Chars
