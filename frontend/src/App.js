import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Matches from './components/Matches.js';
import Location from './components/PlayArea';
import Homepage from './components/Homepage';
import Ranking from './components/Ranking';
import TeamProfile from './components/TeamProfile';
import PlayAreaList from './components/PlayAreaList';

// Manage State
import { useUserData } from './hooks/useUserData';
import { ACTIONS } from './constants/ACTIONS';
import { setPlayArea, openQR, closeModal } from './helpers/dispatch';
import { UserContext } from './contexts/UserContext';
import { fetchTeamData } from './helpers/fetchTeamData';


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

  const updateTeamData = async (teamData) => {
    return dispatch({ type: ACTIONS.UPDATE_TEAM_DATA, data: teamData })
  }

  return (
    <UserContext.Provider value={{ state, dispatch, openQR, updateTeamData}}>
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
            <PlayAreaList />
          </Route>
          {/* <Route path="/location/:id">
            <PlayArea />
          </Route> */}
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/teams/:id">
            <TeamProfile />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
