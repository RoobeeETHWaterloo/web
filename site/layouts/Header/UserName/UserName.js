import React, { useState, useEffect } from 'react'
import core from 'core'

import s from './UserName.scss'


const UserName = () => {
  const [ name, setName ] = useState(core.player.getName())

  useEffect(() => {
    core.provider.onConnect(() => {
      const name = core.player.getName()

      setName(name)
    })
  }, [])

  return Boolean(name) && (
    <div className={s.name}>{name}</div>
  )
}


export default UserName
