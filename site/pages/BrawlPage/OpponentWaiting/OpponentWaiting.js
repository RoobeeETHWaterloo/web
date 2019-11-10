import React, { Fragment } from 'react'
import cx from 'classnames'

import Countdown from 'components/ui/Countdown/Countdown'
import Button from 'components/ui/Button/Button'

import s from './OpponentWaiting.scss'


const OpponentWaiting = () => (
  <div className={s.content}>
    <Countdown time={60}>
      {
        ({ value }) => (
          <Fragment>
            <div className={cx(({ [s.muted]: value === 0 }))}>
              <div className={s.title}>Waiting for the opponent</div>
              <div className={s.text}>Be patient, the fight will begin shortly! The opponent has 1 minute to be ready</div>
            </div>
            {
              Boolean(value === 0) && (
                <Fragment>
                  <div className={s.hr} />
                  <div className={s.title}>So sad, but the opponent didn't accept the fight...</div>
                  <Button className={s.button} to="/brawl">Start new fight</Button>
                </Fragment>
              )
            }
          </Fragment>
        )
      }
    </Countdown>
  </div>
)


export default OpponentWaiting
