import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import s from './CharImage.scss'


const CharImage = ({ className, src, type }) => {
  let typeClassName

  if (type) {
    typeClassName = type
  }
  else {
    if (/cryptokitties/.test(src)) {
      typeClassName = 'cat'
    }
    else if (/steemitimages/.test(src)) {
      typeClassName = 'baseball'
    }
    else if (/miro.medium/.test(src)) {
      typeClassName = 'axie'
    }
  }

  return (
    <div className={cx(s.charImage, className)}>
      <div className={cx(s.imageOverflow, [s[typeClassName]])}>
        <img key={src} src={src} alt="" />
      </div>
    </div>
  )
}

CharImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
}


export default CharImage
