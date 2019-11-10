import React, { Fragment } from 'react'

import Header from 'layouts/Header/Header'


const InsideLayout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)


export default InsideLayout
