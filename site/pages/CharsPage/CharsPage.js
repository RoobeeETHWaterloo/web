import React, { useState, useCallback } from 'react'

import Chars from './Chars/Chars'

import s from './CharsPage.scss'

import swordsImage from './images/swords.svg'


const CharsPage = () => {
  const [ char, setChar ] = useState(null)

  const handleSelect = useCallback((char) => {
    setChar(char)
  }, [])

  return (
    <div>
      <div className={s.header}>
        <img className={s.icon} src={swordsImage} alt="" />
        <div className={s.title}>Choose your fighter</div>
        <div className={s.subTitle}>Here you can trade Axies with other adopters.</div>
      </div>
      <Chars selectedChar={char} onSelect={handleSelect} />
    </div>
  )
}


export default CharsPage
