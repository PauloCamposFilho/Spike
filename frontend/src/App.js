import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Matches from './components/Matches.js';
import Location from './components/Location';
import Homepage from './components/Homepage';
import Ranking from './components/Ranking';

// Manage State
import { useUserData } from './hooks/useUserData';
import { ACTIONS } from './constants/ACTIONS';
import { setPlayArea, openQR, closeModal } from './helpers/dispatch';
import { UserContext } from './contexts/userContext';


function App() {
  // Custom hook manages all global state through action suite, and fetches data relevant to user on initial pageload
  const { state, dispatch } = useUserData();

  const setPlayArea = (playAreaId) => {
    // Clear current play area in case of falsey input from toggle
    if (!playAreaId) {
      return dispatch({ type: ACTIONS.SET_CURRENT_PLAY_AREA, data: '' })
    }
    // Otherwise, set play area indo
    return dispatch({ type: ACTIONS.SET_CURRENT_PLAY_AREA, data: playAreaId})
  };
  
  const openQR = () => {
    return dispatch({ type: ACTIONS.OPEN_QR })
  };
  
  const closeModal = () => {
    return dispatch({ type: ACTIONS.CLOSE_MODAL })
  };

  return (
    <UserContext.Provider value={{ state, dispatch, openQR}}>
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
    </UserContext.Provider>
  );
}

export default App;
