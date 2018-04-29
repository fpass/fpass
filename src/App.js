import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './component/Navbar'
import Home from './page/Home'

export default () => (
  <Fragment>
    <Navbar />
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Fragment>
)
