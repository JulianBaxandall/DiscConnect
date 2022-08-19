import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TeamsIndex from './TeamsIndex'
import TeamsShow from './TeamsShow'
import TeamsNew from './TeamsNew'
import WorkoutsNew from './WorkoutsNew'
import TeamWorkouts from './TeamWorkouts'
import UserShow from './UserShow'
import TeamFeedback from './TeamFeedback'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/teams' component={TeamsIndex} />
        <Route exact path="/teams/new" component={TeamsNew} />
        <Route exact path="/teams/:id/" component={TeamsShow} />
        <Route exact path="/workouts/new" component={WorkoutsNew} />
        <Route exact path="/teams/:id/workouts" component={TeamWorkouts} />
        <Route exact path="/users/:id" component={UserShow} />
        <Route exact path="/teams/:id/feedback" component={TeamFeedback} />

      </Switch>
    </BrowserRouter>
  )
}

export default App
