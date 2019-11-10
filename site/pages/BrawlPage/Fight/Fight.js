import React, { useState, useEffect, useCallback } from 'react'
import core from 'core'

import Button from 'components/ui/Button/Button'

import HeroCard from './HeroCard/HeroCard'
import ActionLog from './ActionLog/ActionLog'
import BrawlResults from './BrawlResults/BrawlResults'

import s from './Fight.scss'

import shieldImage from './images/shield.svg'
import swordImage from './images/sword.svg'


const defenseActions = [
  { icon: shieldImage, value: 4 },
  { icon: shieldImage, value: 5 },
  { icon: shieldImage, value: 6 },
]

const attackActions = [
  { icon: swordImage, value: 1 },
  { icon: swordImage, value: 2 },
  { icon: swordImage, value: 3 },
]


const useActionsSelectHandler = ({ selfActions, setSelfActions }) => {
  return useCallback((value) => {
    const { defense, attack } = selfActions
    let isItemExists

    isItemExists = defense.map((v) => v).includes(value)

    if (isItemExists) {
      return setSelfActions({ defense: defense.filter((v) => v !== value), attack })
    }

    isItemExists = attack.map((v) => v).includes(value)

    if (isItemExists) {
      return setSelfActions({ defense, attack: attack.filter((v) => v !== value) })
    }

    const selectedActionCount = defense.length + attack.length
    const actionType = value < 4 ? 'attack' : 'defense'

    if (selectedActionCount === 0) {
      setSelfActions({ defense: [], attack: [], [actionType]: [ value ] })
    }
    else if (selectedActionCount === 1) {
      if (attack.length) {
        if (actionType === 'defense') {
          setSelfActions({ defense: [ value ], attack })
        }
        else {
          if (attack[0] === value) {
            setSelfActions({ defense: [], attack: [] })
          }
          else {
            setSelfActions({ defense: [], attack: [ attack[0], value ] })
          }
        }
      }
      else {
        if (actionType === 'attack') {
          setSelfActions({ defense, attack: [ value ] })
        }
        else {
          if (defense[0] === value) {
            setSelfActions({ defense: [], attack: [] })
          }
          else {
            setSelfActions({ defense: [ defense[0], value ], attack: [] })
          }
        }
      }
    }
    else {
      const isInOneActionType = defense.length === 2 || attack.length === 2

      if (isInOneActionType) {
        if (attack.length) {
          if (actionType === 'defense') {
            setSelfActions({ defense: [ value ], attack: [ attack[1] ] })
          }
          else {
            if (attack.includes(value)) {
              setSelfActions({ defense: [], attack: attack.filter((v) => v !== value) })
            }
            else {
              setSelfActions({ defense: [], attack: [ attack[1], value ] })
            }
          }
        }
        else {
          if (actionType === 'attack') {
            setSelfActions({ defense: [ defense[1] ], attack: [ value ] })
          }
          else {
            if (defense.includes(value)) {
              setSelfActions({ defense: defense.filter((v) => v !== value), attack: [] })
            }
            else {
              setSelfActions({ defense: [ defense[1], value ], attack: [] })
            }
          }
        }
      }
      else if (actionType === 'attack') {
        if (attack[0] === value) {
          setSelfActions({ defense, attack: [] })
        }
        else {
          setSelfActions({ defense, attack: [ value ] })
        }
      }
      else {
        if (defense[0] === value) {
          setSelfActions({ defense: [], attack })
        }
        else {
          setSelfActions({ defense: [ value ], attack })
        }
      }
    }
  }, [ selfActions ])
}

const BrawlPage = () => {
  const [ playerValues, setPlayerValues ] = useState({
    self: { name: 'TinkyWinky', image: 'https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1720283.svg', hp: 15 },
    opponent: { name: 'WizzyPizzy', image: 'https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1720012.svg', hp: 15 },
  })

  const [ selfActions, setSelfActions ]         = useState({ defense: [], attack: [] })
  const [ opponentActions, setOpponentActions ] = useState({ defense: [], attack: [] })

  useEffect(() => {
    // core.challenge.stateGet()


  }, [])

  const handleActionsSelect = useActionsSelectHandler({ selfActions, opponentActions, setSelfActions })

  const handleReadyClick = useCallback(() => {
    const attackStrength  = 2
    const opponentActions = { attack: [ 1 ], defense: [ 4 ] }
    const newSelfHp       = playerValues.self.hp - opponentActions.attack.filter((attack) => !selfActions.defense.map((v) => v - 3).includes(attack)).length * attackStrength
    const newOpponentHp   = playerValues.opponent.hp - selfActions.attack.filter((attack) => !opponentActions.defense.map((v) => v + 3).includes(attack)).length * attackStrength

    setOpponentActions(opponentActions)
    setPlayerValues((state) => ({ ...state, self: { ...state.self, hp: newSelfHp }, opponent: { ...state.opponent, hp: newOpponentHp } }))

    // TODO weird code
    setTimeout(() => {
      setOpponentActions({ defense: [], attack: [] })
    }, 1800)
  }, [ selfActions, playerValues ])

  const isButtonDisabled = selfActions.length < 2

  return (
    <div className={s.page}>
      {/* <BrawlResults positive={false} /> */}
      <div className={s.header}>
        <div className={s.title}>Brawl is live!</div>
        <div className={s.subTitle}>First rule is to tell everybody about CryptoBrawl :)</div>
      </div>
      <div className={s.content}>
        <div className={s.col}>
          <HeroCard
            hero={playerValues.self}
            actionTitle="Defense"
            actionItems={defenseActions}
            actionValues={selfActions.defense}
            onActionSelect={handleActionsSelect}
          />
        </div>
        <div className={s.centralCol}>
          <ActionLog />
          <Button small disabled={isButtonDisabled} onClick={handleReadyClick}>Ready</Button>
        </div>
        <div className={s.col}>
          <HeroCard
            hero={playerValues.opponent}
            actionTitle="Attack"
            actionItems={attackActions}
            actionValues={selfActions.attack}
            rtl
            onActionSelect={handleActionsSelect}
          />
        </div>
      </div>
    </div>
  )
}


export default BrawlPage
