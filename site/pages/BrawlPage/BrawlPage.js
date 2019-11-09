import React, { useState, useCallback } from 'react'

import Button from 'components/ui/Button/Button'

import HeroCard from './HeroCard/HeroCard'
import Actions from './Actions/Actions'
import ActionAnimation from './ActionAnimation/ActionAnimation'

import s from './BrawlPage.scss'


const defenseActions = [
  { title: 'Head', value: 4 },
  { title: 'Body', value: 5 },
  { title: 'Tail', value: 6 },
]

const attackActions = [
  { title: 'Head', value: 1 },
  { title: 'Body', value: 2 },
  { title: 'Tail', value: 3 },
]


const BrawlPage = () => {
  const [ playerValues, setPlayerValues ]       = useState({ self: { hp: 15 }, opponent: { hp: 15 } })
  const [ selfActions, setSelfActions ]         = useState({ defense: [], attack: [] })
  const [ opponentActions, setOpponentActions ] = useState({ defense: [], attack: [] })

  const { self, opponent } = playerValues

  const handleActionsSelect = useCallback((value) => {
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

  const handleReadyClick = useCallback(() => {
    const attackStrength  = 2
    const opponentActions = { attack: [ 1 ], defense: [ 4 ] }
    const newSelfHp       = playerValues.self.hp - opponentActions.attack.filter((attack) => !selfActions.defense.map((v) => v - 3).includes(attack)).length * attackStrength
    const newOpponentHp   = playerValues.opponent.hp - selfActions.attack.filter((attack) => !opponentActions.defense.map((v) => v + 3).includes(attack)).length * attackStrength

    setOpponentActions(opponentActions)
    setPlayerValues({ self: { hp: newSelfHp }, opponent: { hp: newOpponentHp } })
  }, [ selfActions, playerValues ])

  const isButtonDisabled = selfActions.length < 2

  return (
    <div className={s.page}>
      <div className={s.content}>
        <div className={s.col}>
          <HeroCard currentHp={self.hp} />
          <Actions items={defenseActions} values={selfActions.defense} onChange={handleActionsSelect}>
            {
              (itemProps, actionComponent) => (
                <ActionAnimation key={itemProps.value} active={opponentActions.attack.includes(itemProps.value - 3)}>
                  {actionComponent}
                </ActionAnimation>
              )
            }
          </Actions>
        </div>
        <div className={s.col}>
          <Actions items={attackActions} values={selfActions.attack} onChange={handleActionsSelect} />
          <HeroCard currentHp={opponent.hp} rtl />
        </div>
      </div>
      <br /><br />
      <Button disabled={isButtonDisabled} onClick={handleReadyClick}>Ready</Button>
      <br />
      You should select 2 actions
    </div>
  )
}


export default BrawlPage
