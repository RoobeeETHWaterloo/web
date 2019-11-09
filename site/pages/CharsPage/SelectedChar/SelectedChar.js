import React, { Fragment } from 'react'

import CharImage from 'components/ui/CharImage/CharImage'

import s from './SelectedChar.scss'

import placeholder from './images/char-placeholder.png'


const SelectedChar = ({ data }) => (
  <div>
    {
      data && data.image ? (
        <Fragment>
          <CharImage className={s.image} src={data.image} />
          <div className={s.name}>{data.name}</div>
        </Fragment>
      ) : (
        <div className={s.placeholderContainer}>
          <img className={s.placeholder} src={placeholder} alt="" />
          <div className={s.placeholderTitle}>Select your character to smash your enemies!</div>
        </div>
      )
    }
  </div>
)


export default SelectedChar
