import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Card from 'components/layout/Card/Card'

import CharImage from 'components/ui/CharImage/CharImage'
import HealthBar from './HealthBar/HealthBar'
import Actions from './Actions/Actions'

import s from './HeroCard.scss'


const HeroCard = ({ hero: { name, image, hp }, actionTitle, actionItems, actionValues, rtl, onActionSelect }) => {
  const actionsNode = (
    <Actions
      title={actionTitle}
      items={actionItems}
      values={actionValues}
      rtl={rtl}
      onChange={onActionSelect}
    />
  )

  return (
    <Card className={s.heroCard}>
      <div className={s.content}>
        {rtl && actionsNode}
        <div className={cx(s.main, { [s.rtl]: rtl })}>
          <div className={s.name}>{name}</div>
          <CharImage className={s.heroImage} src={image} />
          <HealthBar className={s.hp} current={hp} total={15} />
        </div>
        {!rtl && actionsNode}
      </div>
    </Card>
  )
}

HeroCard.propTypes = {
  rtl: PropTypes.bool, // align right
}


export default HeroCard
