import React from 'react'
import PropTypes from 'prop-types'

import s from './HeroImage.scss'


const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Placeholder_male_superhero_c.png'

const HeroImage = ({ src = placeholder }) => (
  <div className={s.heroImage}>
    <img src={src} alt="" />
  </div>
)

HeroImage.propTypes = {
  src: PropTypes.string,
}


export default HeroImage
