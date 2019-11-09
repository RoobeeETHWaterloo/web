import React, { useState, useCallback } from 'react'

import Button from 'components/ui/Button/Button'

import HeroCard from './HeroCard/HeroCard'
import Actions from './Actions/Actions'

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
  const [ playerValues, setPlayerValues ] = useState({ self: { hp: 15 }, opponent: { hp: 15 } })
  const [ actionValues, setActionValues ] = useState({ defense: [], attack: [] })

  const { self, opponent } = playerValues

  const handleActionsSelect = useCallback((value) => {
    const { defense, attack } = actionValues
    let isItemExists

    isItemExists = defense.map((v) => v).includes(value)

    if (isItemExists) {
      return setActionValues({ defense: defense.filter((v) => v !== value), attack })
    }

    isItemExists = attack.map((v) => v).includes(value)

    if (isItemExists) {
      return setActionValues({ defense, attack: attack.filter((v) => v !== value) })
    }

    const selectedActionCount = defense.length + attack.length
    const actionType = value < 4 ? 'attack' : 'defense'

    if (selectedActionCount === 0) {
      setActionValues({ defense: [], attack: [], [actionType]: [ value ] })
    }
    else if (selectedActionCount === 1) {
      if (attack.length) {
        if (actionType === 'defense') {
          setActionValues({ defense: [ value ], attack })
        }
        else {
          if (attack[0] === value) {
            setActionValues({ defense: [], attack: [] })
          }
          else {
            setActionValues({ defense: [], attack: [ attack[0], value ] })
          }
        }
      }
      else {
        if (actionType === 'attack') {
          setActionValues({ defense, attack: [ value ] })
        }
        else {
          if (defense[0] === value) {
            setActionValues({ defense: [], attack: [] })
          }
          else {
            setActionValues({ defense: [ defense[0], value ], attack: [] })
          }
        }
      }
    }
    else {
      const isInOneActionType = defense.length === 2 || attack.length === 2

      if (isInOneActionType) {
        if (attack.length) {
          if (actionType === 'defense') {
            setActionValues({ defense: [ value ], attack: [ attack[1] ] })
          }
          else {
            if (attack.includes(value)) {
              setActionValues({ defense: [], attack: attack.filter((v) => v !== value) })
            }
            else {
              setActionValues({ defense: [], attack: [ attack[1], value ] })
            }
          }
        }
        else {
          if (actionType === 'attack') {
            setActionValues({ defense: [ defense[1] ], attack: [ value ] })
          }
          else {
            if (defense.includes(value)) {
              setActionValues({ defense: defense.filter((v) => v !== value), attack: [] })
            }
            else {
              setActionValues({ defense: [ defense[1], value ], attack: [] })
            }
          }
        }
      }
      else if (actionType === 'attack') {
        if (attack[0] === value) {
          setActionValues({ defense, attack: [] })
        }
        else {
          setActionValues({ defense, attack: [ value ] })
        }
      }
      else {
        if (defense[0] === value) {
          setActionValues({ defense: [], attack })
        }
        else {
          setActionValues({ defense: [ value ], attack })
        }
      }
    }
  }, [ actionValues ])

  const handleReadyClick = useCallback(() => {
    const attackStrength  = 2
    const opponentActions = [ 1, 2 ]
    const newSelfHp       = playerValues.self.hp - opponentActions.filter((attack) => !actionValues.defense.map((v) => v - 3).includes(attack)).length * attackStrength
    const newOpponentHp   = playerValues.opponent.hp - actionValues.attack.filter((attack) => !opponentActions.map((v) => v + 3).includes(attack)).length * attackStrength

    setPlayerValues({ self: { hp: newSelfHp }, opponent: { hp: newOpponentHp } })
  }, [ actionValues, playerValues ])

  const isButtonDisabled = actionValues.length < 2

  return (
    <div className={s.page}>
      <div className={s.content}>
        <div className={s.col}>
          <HeroCard currentHp={self.hp} />
          <Actions items={defenseActions} values={actionValues.defense} onChange={handleActionsSelect} />
        </div>
        <div className={s.col}>
          <Actions items={attackActions} values={actionValues.attack} onChange={handleActionsSelect} />
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
