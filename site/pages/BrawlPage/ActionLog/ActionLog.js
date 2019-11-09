import React from 'react'

import s from './ActionLog.scss'


const items = [
  'The opponent attacked your hero for <b>2 damage</b>. Your attack was blocked',
  'Wow! You both have blocked your attacks!!! Amazing!',
]

const ActionLog = () => (
  <div className={s.actionLog}>
    <div className={s.content}>
      <div className={s.items}>
        {
          items.map((item) => (
            <div key={item} className={s.item} dangerouslySetInnerHTML={{ __html: item }} />
          ))
        }
      </div>
    </div>
  </div>
)


export default ActionLog
