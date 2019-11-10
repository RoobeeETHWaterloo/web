import React from 'react'
import { useConnect } from 'store'
import cx from 'classnames'

import OpponentSearching from './OpponentSearching/OpponentSearching'

import s from './Header.scss'

import logo from './images/logo.svg'


const Header = () => {
  const { isOpponentSearching } = useConnect({
    isOpponentSearching: 'fight.isSearching',
  })

  const searchContainerClassName = cx(s.searchContainer, {
    [s.visible]: isOpponentSearching,
  })

  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <div className={s.content}>
          <img className={s.logo} src={logo} alt="" />
        </div>
      </header>
      <div className={s.content}>
        <div className={searchContainerClassName}>
          <OpponentSearching />
        </div>
      </div>
    </div>
  )
}


export default Header
