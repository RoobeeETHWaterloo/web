import React from 'react'

import Spinner from 'components/ui/Spinner/Spinner'

import s from './OpponentSearching.scss'


const OpponentSearching = () => (
  <div className={s.searching}>
    <div className={s.text}>We are searching for opponent for you!</div>
    <Spinner small />
  </div>
)


export default OpponentSearching
