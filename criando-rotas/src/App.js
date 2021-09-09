import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Users from './Users'
import Home from './Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
