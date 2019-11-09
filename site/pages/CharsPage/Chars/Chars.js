import React from 'react'

import Char from './Char/Char'

import s from './Chars.scss'


const Chars = ({ items }) => {

  return (
    <div className={s.chars}>
      {
        items.map((item, index) => {
          return (
            <div key={index} className={s.charContainer}>
              <Char {...item} />
            </div>
          )
        })
      }
    </div>
  )
}


export default Chars
