import React from 'react'
import { Route } from 'react-router-dom'

import App from 'containers/App/App'

import HomePage from 'pages/HomePage/HomePage'
import BrawlPage from 'pages/BrawlPage/BrawlPage'


const routes = (
  <App>
    <Route path="/" exact component={HomePage} />
    <Route path="/brawl" exact component={BrawlPage} />
  </App>
)


export default routes
