import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useConnect, useReducers } from 'store'
import core from 'core'

import Spinner from 'components/ui/Spinner/Spinner'
import Button from 'components/ui/Button/Button'

import s from './OpponentSearching.scss'


const OpponentSearching = ({ history }) => {
  const { isSearching, pendingOpponent } = useConnect({
    isSearching: 'fight.isSearching',
  })

  const { fight } = useReducers()

  useEffect(() => {
    fight.setSearching(true)
    // core.challengeRequest()

    // core.challengeRequest.onStart((event) => {
    //   console.log(444, event)
    //
    //   history.push('/brawl')
    // })

    setTimeout(() => {
      fight.setPendingOpponent({})
    }, 2000)
  }, [])

  return (
    <div className={s.container}>
      {
        isSearching ? (
          <div className={s.content}>
            <Spinner className={s.spinner} big />
            <div className={s.text}>We are looking for opponent for you! Please wait ❤️</div>
          </div>
        ) : (
          <div className={s.content}>
            <div className={s.title}>An opponent found!</div>
            <div className={s.text}>You should accept the process to begin this fight!</div>
            <Button className={s.button} to="/brawl">I'm Ready!</Button>
          </div>
        )
      }

    </div>
  )
}


export default withRouter(OpponentSearching)
