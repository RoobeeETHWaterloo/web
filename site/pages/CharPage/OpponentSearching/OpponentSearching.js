import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useConnect, useReducers } from 'store'
import Cookies from 'js-cookie'
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

    core.challengeRequest.onStart(() => {
      core.challenge.stateGet(({ fightState, charMy, charEnemy }) => {
        console.log(5555, { fightState, charMy, charEnemy })

        /*

        tokenId
        name
        imageUrl
        currentHP
        damage
        fightId
        fightsCount
        fullHp
        lastFihgtBlockNumber
        level
        winsCount

       */

        const modifyData = ({ tokenId, name, imageUrl, fullHp, level, fightsCount, winsCount }) => ({
          tokenId,
          name,
          image: imageUrl,
          hp: fullHp,
          level,
          fightsCount,
          winsCount,
        })

        fight.setData({
          state: fightState,
          me: modifyData(charMy),
          opponent: modifyData(charEnemy),
        })

        history.push('/brawl')
      })
    })

    const mockParams = Cookies.get('testacc') ? [
      'x06012c8cf97bead5deae237070f9587f8e7a266d',
      22,
      '0x07E691eceaFD6F6571BA296C69A775C186C274b7',
    ] : [
      '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      33,
      '0xa085aeC2c42D3f68C1c1484661EBa58514cbDD2E',
    ]

    core.challengeRequest.create(mockParams)
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
