import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TeamsIndex from "./TeamsIndex"
import TeamsShow from "./TeamsShow"
import TeamsNew from './TeamsNew'
import WorkoutsNew from './WorkoutsNew'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/teams' component={TeamsIndex} />
        <Route exact path="/teams/new" component={TeamsNew} />
        <Route exact path="/teams/:id/" component={TeamsShow} />
        <Route exact path="/workouts/new" component={WorkoutsNew} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
