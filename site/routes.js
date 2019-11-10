import React from 'react'
import { Route } from 'react-router-dom'

import App from 'containers/App/App'

import InsideLayout from 'layouts/InsideLayout/InsideLayout'

import HomePage from 'pages/HomePage/HomePage'
import CharsPage from 'pages/CharsPage/CharsPage'
import CharPage from 'pages/CharPage/CharPage'
import BrawlPage from 'pages/BrawlPage/BrawlPage'


const routes = (
  <App>
    <Route path="/" exact component={HomePage} />
    <InsideLayout>
      <Route path="/chars" exact component={CharsPage} />
      <Route path="/chars/:id" exact component={CharPage} />
      <Route path="/brawl" exact component={BrawlPage} />
    </InsideLayout>
  </App>
)


export default routes
