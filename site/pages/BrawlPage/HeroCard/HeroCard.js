import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import HeroImage from './HeroImage/HeroImage'
import HealthBar from './HealthBar/HealthBar'

import s from './HeroCard.scss'


const HeroCard = ({ currentHp, rtl }) => (
  <div className={cx({ [s.rtl]: rtl })}>
    <HealthBar current={currentHp} total={15} />
    <HeroImage />
    <div className={s.name}>Super Cat</div>
  </div>
)

HeroCard.propTypes = {
  rtl: PropTypes.bool, // align right
}


export default HeroCard
