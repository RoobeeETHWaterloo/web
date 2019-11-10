import React, { Fragment, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useConnect, useReducers } from 'store'
import request from 'request'
import core from 'core'

import ContentSpinner from 'components/ui/ContentSpinner/ContentSpinner'
import CharImage from 'components/ui/CharImage/CharImage'
import Button from 'components/ui/Button/Button'

import OpponentSearching from './OpponentSearching/OpponentSearching'

import s from './CharPage.scss'


const CharPage = ({ match: { params: { id: charId } } }) => {
  const { isSearching, isFetching, isFetched, data } = useConnect((state) => {
    const { chars: { isFetching, isFetched, items }, fight: { isSearching } } = state

    return {
      isSearching,
      isFetching,
      isFetched,
      data: items ? items.find((char) => Number(char.id) === Number(charId)) : null,
    }
  }, [ charId ])

  const { chars } = useReducers()
  const [ isSearchVisible, setSearchVisibility ] = useState(false)

  useEffect(() => {
    if (!data) {
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
  }, [ data ])

  const handleFightClick = useCallback(() => {
    setSearchVisibility(true)
  }, [])

  if (!isFetched && (!data || isFetching)) {
    return (
      <ContentSpinner />
    )
  }

  const stats = [
    { title: 'Games', value: '41' },
    { title: 'Wins', value: '24' },
    { title: 'Loses', value: '17' },
    { title: 'Exp', value: '1387 <span>/ 2348</span>' },
    { title: 'Hp', value: '105' },
    { title: 'Strength', value: '12' },
    { title: 'Vitality', value: '8' },
  ]

  return (
    <div className={s.page}>
      <div className={s.content}>
        <div className={s.buttons}>
          <Button className={s.button} onClick={handleFightClick}>FIGHT!</Button>
          <Link className={s.backLink} to="/chars" color="blue">Change character</Link><br />
        </div>
        <div className={s.imageContainer}>
          <div className={s.level}><span>LVL:</span> 13</div>
          <CharImage className={s.image} src={data.image} />
          <div className={s.name}>{name}</div>
        </div>
        <div className={s.info}>
          <div className={s.comingSoon}>Coming Soon</div>
          <table className={s.stats}>
            <tbody>
              {
                stats.map(({ title, value }, index) => {

                  return (
                    <tr key={index}>
                      <td><span className={s.statTitle}>{title}</span></td>
                      <td><span className={s.statValue} dangerouslySetInnerHTML={{ __html: value }}></span></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {
        isSearchVisible && (
          <OpponentSearching />
        )
      }
    </div>
  )
}


export default CharPage
