import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useConnect } from 'store'

import NoItems from 'components/ui/NoItems/NoItems'

import OpponentWaiting from './OpponentWaiting/OpponentWaiting'
import Fight from './Fight/Fight'

import s from './BrawlPage.scss'


const BrawlPage = () => {
  const { fight: { isSearching, pendingOpponent, data } } = useConnect({ fight: 'fight' })

  useEffect(() => {
    // core.challenge.stateGet()


  }, [])

  if (pendingOpponent) {
    return (
      <div className={s.page}>
        <OpponentWaiting />
      </div>
    )
  }

  if (!isSearching && !data) {
    return (
      <div className={s.page}>
        <NoItems
          title="You don't have active fights"
          subTitle={(
            <div>Start from <Link to="/chars">selecting</Link> a character you'd like to fight!</div>
          )}
        />
      </div>
    )
  }

  return (
    <div className={s.page}>
      <Fight />
    </div>
  )
}


export default BrawlPage
