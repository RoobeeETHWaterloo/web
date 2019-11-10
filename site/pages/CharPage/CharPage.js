import React, { useEffect, useCallback } from 'react'
import { useConnect, useReducers } from 'store'
import request from 'request'
import core from 'core'

import ContentSpinner from 'components/ui/ContentSpinner/ContentSpinner'
import CharImage from 'components/ui/CharImage/CharImage'
import Button from 'components/ui/Button/Button'

import s from './CharPage.scss'


const CharPage = ({ match: { params: { id: charId } } }) => {
  const { isFetching, isFetched, data } = useConnect(({ chars: { isFetching, isFetched, items } }) => ({
    isFetching,
    isFetched,
    data: items ? items.find((char) => Number(char.id) === Number(charId)) : null,
  }), [ charId ])

  const { chars } = useReducers()

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

  }, [])

  if (!isFetched && (!data || isFetching)) {
    return (
      <ContentSpinner />
    )
  }

  return (
    <div className={s.charPage}>
      <div className={s.leftCol}>
        <CharImage src={data.image} /><br />
        <Button to="/chars" color="blue">Select character</Button><br />
        <Button onClick={handleFightClick}>FIGHT!</Button>
      </div>
      <div className={s.rightCol}>
        <div className={s.headline}>
          <div>
            <div className={s.id}># 1344552</div>
            <div className={s.name}>Foo</div>
          </div>
          <div>

          </div>
        </div>
        <table className={s.table}>
          <tbody>
          <tr>
            <td className={s.label}>OWNER:</td>
            <td className={s.value}>0x0235235235235asfafaf66aa</td>
          </tr>
          <tr>
            <td className={s.label}>LVL:</td>
            <td className={s.value}>13</td>
          </tr>
          <tr>
            <td className={s.label}>EXP:</td>
            <td className={s.value}>1276 <span>/ 1300</span></td>
          </tr>
          <tr>
            <td className={s.label}>HP:</td>
            <td className={s.value}>15</td>
          </tr>
          <tr>
            <td className={s.label}>WINS:</td>
            <td className={s.value}>30</td>
          </tr>
          <tr>
            <td className={s.label}>LOSES:</td>
            <td className={s.value}>24</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default CharPage
