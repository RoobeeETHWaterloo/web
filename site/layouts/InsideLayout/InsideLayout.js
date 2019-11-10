import React, { Fragment, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import core from 'core'

import Header from 'layouts/Header/Header'


const InsideLayout = ({ children, history }) => {
  const isAuthenticated = Boolean(core.player.getName())

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     history.push('/')
  //   }
  // }, [])
  //
  // if (!isAuthenticated) {
  //   return null
  // }

  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}


export default withRouter(InsideLayout)
