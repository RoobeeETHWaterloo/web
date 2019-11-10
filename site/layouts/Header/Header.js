import React from 'react'

import s from './Header.scss'

import logo from './images/logo.svg'


const Header = () => {
  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <div className={s.content}>
          <img className={s.logo} src={logo} alt="" />
        </div>
      </header>
    </div>
  )
}


export default Header
