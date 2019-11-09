import React from 'react'
import { HashRouter as Router } from 'react-router-dom'


const Root = ({ routes }) => (
  <Router>
    {routes}
  </Router>
)


export default Root
