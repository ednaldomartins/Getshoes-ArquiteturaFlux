import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './page/home'
import Cart from './page/cart'

export default function Router () {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cart" component={Cart}/>
    </Switch>
  )
}
