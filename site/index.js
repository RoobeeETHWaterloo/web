import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import core from 'core'

import Root from 'containers/Root/Root'



core.provider.load('Torus', () => {
  // TODO render loader

  ReactDOM.render(
    <Root routes={routes} />,
    document.getElementById('root')
  )
})
