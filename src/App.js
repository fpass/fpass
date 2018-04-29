import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './page/Home'

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
)
