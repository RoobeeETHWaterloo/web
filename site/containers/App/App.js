import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import core from 'core'

import './App.scss'


const Logic = withRouter(({ history }) => {
  useEffect(() => {
    core.challengeRequest.onStart((event) => {
      console.log(444, event)

      history.push('/brawl')
    })
  }, [])

  return null
})

const App = ({ children }) => {

  return (
    <div>
      <Logic />
      {children}
    </div>
  )
}


export default App
