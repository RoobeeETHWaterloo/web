import React, { useState, useEffect, useCallback } from 'react'
import { useConnect, useReducers } from 'store'
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
  }, [ selfActions, setSelfActions ])
}

const BrawlPage = () => {
  const { fight: { data, data: { state, me: self, opponent } } } = useConnect({ fight: 'fight' })
  const { fight } = useReducers()
  const [ isUIBlocked, setUIBlockingStatus ] = useState(false)
  const [ selfActions, setSelfActions ] = useState({ defense: [], attack: [] })

  console.log(666, data)

  useEffect(() => {
    // core.challenge.stateGet()


  }, [])

  const handleActionsSelect = useActionsSelectHandler({ selfActions, setSelfActions })

  const handleReadyClick = useCallback(() => {
    const action = [ ...selfActions.attack, ...selfActions.defense ]

    if (action.length === 2) {
      if (Cookies.get('testacc')) {
        const params = [
          6, 1, 1, 2, 2, 4, "aaa", "bbb",
          "0xfd17c2cc3bdd79d7d88f9363edda1632961c7d31a9aacc6e8f0baa7c4fff0ab85ef2ac0e2aa65b903ce7d4694800440e47324e959a5faba214d9adfd56ee623600",
          "0xe3ae2e895692a44d1743f721acc95851846c17ab7de6d3e305c878d6ae14bf655dfa18c2211a3bdd0211c948e9eb9aec56c55c55cfa27478d63741326165919f01",
        ]

        setUIBlockingStatus(true)
        // core.challenge.action(...action)
        core.challenge.action2(...params)
      }

      core.challenge.onStateChange(() => {
        setUIBlockingStatus(false)

        const attackStrength = 2

        const opponentActions = { attack: [ 1 ], defense: [ 2 ] }
        const newSelfHp       = self.hp - opponentActions.attack.filter((attack) => !selfActions.defense.map((v) => v - 3).includes(attack)).length * attackStrength
        const newOpponentHp   = opponent.hp - selfActions.attack.filter((attack) => !opponentActions.defense.map((v) => v + 3).includes(attack)).length * attackStrength

        fight.updateData({
          me: { hp: newSelfHp },
          opponent: { hp: newOpponentHp },
        })
      })
    }
  }, [ selfActions, self, opponent ])

  const isButtonDisabled = [ ...selfActions.attack, ...selfActions.defense ].length < 2

  return (
    <div>
      {/* <BrawlResults positive={false} /> */}
      <div className={s.header}>
        <div className={s.title}>Brawl is live!</div>
        <div className={s.subTitle}>First rule is to tell everybody about CryptoBrawl :)</div>
      </div>
      <div className={s.content}>
        <div className={s.col}>
          <HeroCard
            hero={self}
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
            hero={opponent}
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
