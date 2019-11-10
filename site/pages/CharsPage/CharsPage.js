import React, { useEffect } from 'react'
import { useConnect, useReducers } from 'store'
import request from 'request'

import ContentSpinner from 'components/ui/ContentSpinner/ContentSpinner'

import Chars from './Chars/Chars'

import s from './CharsPage.scss'

import swordsImage from './images/swords.svg'


const CharsPage = () => {
  const { isFetching, isFetched, items } = useConnect((state) => state.chars)
  const { chars } = useReducers()

  const title     = items && items.length ? 'Choose your fighter' : 'No fighters found'
  const subTitle  = items && items.length ? 'And start fighting' : 'Whoooohooo'

  useEffect(() => {
    if (!isFetched) {
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
    }
  }, [ isFetched ])

  // useEffect(() => {
  //   chars.setFetching(true)
  //
  //   core.char.getList((items) => {
  //     const modifiedItems = items.map(({ id, name, image_url_cdn: image }) => ({
  //       id,
  //       name,
  //       image,
  //     }))
  //
  //     chars.setItems(modifiedItems)
  //   })
  // }, [])

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
