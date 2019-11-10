import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import core from 'core'


const InsideLayout = ({ children, history }) => {
  const isAuthenticated = Boolean(core.player.getName())

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/')
    }
  }, [])

  if (!isAuthenticated) {
    return null
  }

  return children
}


export default withRouter(InsideLayout)
