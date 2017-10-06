/**
 * Created by sravankumarganji on 9/18/17.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'


const Routing = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
  </Switch>
)

export default Routing
