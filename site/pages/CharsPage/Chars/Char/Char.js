import React from 'react'

import CharImage from 'components/ui/CharImage/CharImage'

import s from './Char.scss'


const Char = ({ id, name, image }) => (
  <a className={s.char} href={`/chars/${id}`}>
    <div className={s.headline}>
      <div className={s.info}><span>LVL</span> 13</div>
      <div className={s.info}><span>W</span> 28</div>
      <div className={s.info}><span>L</span> 15</div>
    </div>
    <div className={s.imageContainer}>
      <CharImage className={s.image} src={image} />
    </div>
    <div className={s.name}>{name}</div>
  </a>
)


export default Char
