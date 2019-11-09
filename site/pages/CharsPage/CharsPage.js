import React, { useEffect, useState } from 'react'
import { useConnect, useReducers } from 'store'
import request from 'request'

import ContentSpinner from 'components/ui/ContentSpinner/ContentSpinner'

import Chars from './Chars/Chars'

import s from './CharsPage.scss'

import swordsImage from './images/swords.svg'


// const chars = [
//   { id: 1, name: 'Foo', image: 'https://miro.medium.com/max/480/1*OGfTUWooSC2NMqw8x6nn4w@2x.png' },
//   { id: 2, name: 'Bar', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1402513.svg' },
//   { id: 3, name: 'Zoo', image: 'https://steemitimages.com/0x0/https://i.imgur.com/I9uJYPQ.png' },
//   { id: 4, name: 'Foo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1399882.svg' },
//   { id: 5, name: 'Bar', image: 'https://steemitimages.com/0x0/https://i.imgur.com/I9uJYPQ.png' },
//   { id: 6, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
//   { id: 7, name: 'Bar', image: 'https://miro.medium.com/max/480/1*OGfTUWooSC2NMqw8x6nn4w@2x.png' },
//   { id: 8, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
//   { id: 9, name: 'Foo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1399882.svg' },
//   { id: 10, name: 'Bar', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1402513.svg' },
//   { id: 11, name: 'Zoo', image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1505512.svg' },
// ]

const CharsPage = () => {
  const { isFetching, isFetched, items } = useConnect((state) => state.chars)
  const { chars } = useReducers()

  const title     = items && items.length ? 'Choose your fighter' : 'No fighters found'
  const subTitle  = items && items.length ? 'Here you can trade Axies with other adopters.' : 'Whoooohooo'

  useEffect(() => {
    chars.setFetching(true)

    request('https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=0xb367b96bd9af396dc5281cfdcd9e9571f670832f&parents=false&authenticated=false&include=sale,sire,other&orderBy=id&orderDirection=desc')
      .then(({ data: { kitties: items, offset, limit, total } }) => {
        const modifiedItems = items.map(({ id, name, image_url_cdn: image }) => ({
          id,
          name,
          image,
        }))

        chars.setItems(modifiedItems)
      }, () => {
        chars.setItems([])
      })
  }, [])

  if (isFetching && !isFetched) {
    return (
      <ContentSpinner />
    )
  }

  return (
    <div>
      <div className={s.header}>
        <img className={s.icon} src={swordsImage} alt="" />
        <div className={s.title}>{title}</div>
        <div className={s.subTitle}>{subTitle}</div>
      </div>
      <Chars items={items} />
    </div>
  )
}


export default CharsPage
