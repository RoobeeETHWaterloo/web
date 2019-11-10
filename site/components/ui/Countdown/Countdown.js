import React, { Fragment, useState, useEffect } from 'react'

import s from './Countdown.scss'


const Countdown = ({ children, time }) => {
  const [ timeLeft, setTimeLeft ] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((v) => {
        if (v - 1 === 0) {
          clearInterval(interval)
        }

        return v - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  let mins = Math.floor(timeLeft / 60)
  let secs = timeLeft - mins * 60

  if (mins < 10) {
    mins = `0${mins}`
  }

  if (secs < 10) {
    secs = `0${secs}`
  }

  return (
    <Fragment>
      <div className={s.countdown}>
        {
          time < 60 ? (
            <Fragment><span>{secs}</span> sec</Fragment>
          ) : (
            <Fragment><span>{mins}</span> min <span>{secs}</span> sec</Fragment>
          )
        }

      </div>
      {typeof children === 'function' ? children({ value: timeLeft }) : children}
    </Fragment>
  )
}


export default Countdown
