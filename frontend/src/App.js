import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Matches from './components/Matches.js';
import Location from './components/Location';
import Homepage from './components/Homepage';
import Ranking from './components/Ranking';

// Manage State
import { useUserData } from './hooks/useUserData';
import { setPlayArea, openQR, closeModal } from './helpers/dispatch';

function App() {
  const { state, dispatch } = useUserData();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/matches">
          <Matches />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/eloranking">
          <Ranking />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
