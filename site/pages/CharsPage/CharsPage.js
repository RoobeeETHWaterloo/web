import React, { useState, useCallback } from 'react'

import Chars from './Chars/Chars'

import s from './CharsPage.scss'


const CharsPage = () => {
  const [ char, setChar ] = useState(null)

  const handleSelect = useCallback((char) => {
    setChar(char)
  }, [])

  return (
    <div>
      <Chars selectedChar={char} onSelect={handleSelect} />
    </div>
  )
}


export default CharsPage
