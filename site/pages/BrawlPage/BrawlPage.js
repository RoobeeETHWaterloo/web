import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useConnect } from 'store'
import core from 'core'

import NoItems from 'components/ui/NoItems/NoItems'
import Countdown from 'components/ui/Countdown/Countdown'

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
        <div className={s.content}>
          <Countdown time={60} />
          <div className={s.title}>Waiting for the opponent</div>
          <div className={s.text}>Be patient, the fight will begin shortly! The opponent has 1 minute to be ready</div>
        </div>
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
