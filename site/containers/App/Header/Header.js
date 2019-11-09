import React from 'react'

import s from './Header.scss'

import logo from './images/logo.svg'


const Header = () => (
  <header className={s.header}>
    <div className={s.content}>
      <img className={s.logo} src={logo} />
    </div>
  </header>
)


export default Header
