import React from 'react'

import Spinner from 'components/ui/Spinner/Spinner'

import s from './ContentSpinner.scss'


const ContentSpinner = () => (
  <div className={s.content}>
    <Spinner big />
  </div>
)


export default ContentSpinner
