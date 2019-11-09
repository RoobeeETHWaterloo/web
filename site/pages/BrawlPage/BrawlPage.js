import React, { useState, useCallback } from 'react'

import HeroCard from './HeroCard/HeroCard'
import Actions from './Actions/Actions'

import s from './BrawlPage.scss'


const selfActions = [
  { title: 'Head', value: 4 },
  { title: 'Body', value: 5 },
  { title: 'Tail', value: 6 },
]

const opponentActions = [
  { title: 'Head', value: 1 },
  { title: 'Body', value: 2 },
  { title: 'Tail', value: 3 },
]

const BrawlPage = () => {
  const [ values, setValues ] = useState([])

  const handleActionsSelect = useCallback((value) => {
    let newValues

    const isItemExists = values.map((v) => v).includes(value)

    if (isItemExists) {
      newValues = values.filter((v) => v !== value)
    }
    else {
      if (values.length > 1) {
        const [ v1, v2 ] = values

        const isSelfSide      = value > 3
        const isV1OnSelfSide  = v1 > 3
        const isV2OnSelfSide  = v2 > 3

        if (isV1OnSelfSide !== isV2OnSelfSide) {
          let index

          if (isSelfSide && (isV1OnSelfSide || isV2OnSelfSide)) {
            index = values.indexOf(isV1OnSelfSide ? v1 : v2)
          }
          else if (!isSelfSide && (!isV1OnSelfSide || !isV2OnSelfSide)) {
            index = values.indexOf(!isV2OnSelfSide ? v2 : v1)
          }

          newValues = [ values[1 - index], value ]
        }
        else {
          newValues = [ values[1], value ]
        }
      }
      else if (values.length === 1) {
        newValues = [ values[0], value ]
      }
      else {
        newValues = [ value ]
      }
    }

    setValues(newValues)
  }, [ values ])

  return (
    <div className={s.page}>
      <div className={s.content}>
        <div className={s.col}>
          <HeroCard />
          <Actions items={selfActions} values={values} onChange={handleActionsSelect} />
        </div>
        <div className={s.col}>
          <Actions items={opponentActions} values={values} onChange={handleActionsSelect} />
          <HeroCard rtl />
        </div>
      </div>
    </div>
  )
}


export default BrawlPage
