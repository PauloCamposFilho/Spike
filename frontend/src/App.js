import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Matches from './components/Matches.jsx';
import Match from './components/Match.jsx';
import Location from './components/PlayArea';
import Homepage from './components/Homepage';
import Ranking from './components/Ranking';
import TeamProfile from './components/TeamProfile';
import PlayAreaList from './components/PlayAreaList';
import PlayArea from './components/PlayArea.jsx';

import { theme } from "./components/Theme";
import { ThemeProvider } from "@emotion/react";
import './style/App.scss'


// Manage State
import { useUserData } from './hooks/useUserData';
import { ACTIONS } from './constants/ACTIONS';
import { setPlayArea, openQR, closeModal } from './helpers/dispatch';
import { UserContext } from './contexts/UserContext';
import { fetchTeamData } from './helpers/fetchTeamData';


function App() {
  // Custom hook manages all global state through action suite, and fetches data relevant to user on initial pageload
  const { state, dispatch, updateInitialState } = useUserData();
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

  const updatePlayerData = async (playerData) => {
    return dispatch({ type: ACTIONS.UPDATE_USER_DATA, data: playerData });
  }

  const updateProfileLoadingState = (isLoading) => {
    return dispatch({ type: ACTIONS.UPDATE_USER_PAGE_LOADING_STATUS, data: isLoading });
  }

  const updateRankingState = async (rankingData) => {
    return dispatch( {type: ACTIONS.UPDATE_RANKING_DATA, data: rankingData });
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ state, dispatch, openQR, updateTeamData, updatePlayerData, updateProfileLoadingState, updateRankingState }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/matches">
              <Matches />
            </Route>
            <Route path="/match/:id">
              <Match />
            </Route>
            <Route path="/location">
              <PlayAreaList />
            </Route>
            <Route path="/playarea/:id">
              <PlayArea />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
            <Route path="/teams/:id">
              <TeamProfile />
            </Route>
            <Route path="/player/:id">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
