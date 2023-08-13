import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import TeamSelect from './TeamSelect';
import ResultSelect from './ResultSelect';
import { UserContext } from '../contexts/UserContext';
import { useNewMatch } from '../hooks/useNewMatch';
import { NewMatchContext } from '../contexts/NewMatchContext';
import { NEW_MATCH_ACTIONS } from '../constants/NEW_MATCH_ACTIONS';

export default function NewMatch() {
  const { newMatchState, dispatch } = useNewMatch();

  const makeSelection = (selectionType, selection) => {
    switch (selectionType) {
      case "Home Team":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_HOME_TEAM, data: selection});
      case "Away Team":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_AWAY_TEAM, data: selection});
      case "Result":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_RESULT, data: selection});
      default:
        return;
    }
  }

  const { state } = React.useContext(UserContext)

  const [allTeams, setAllTeams] = React.useState([]);

  const homeTeams = state.userData.teamsData.teams_current;
  const awayTeams = allTeams;

  return (
    <NewMatchContext.Provider value={{ newMatchState, dispatch, makeSelection }}>
      <Stack spacing={2}>
        <TeamSelect
          teamType={"Home Team"}
          teams={homeTeams}
        />
        <TeamSelect
          teamType={"Away Team"}
          teams={awayTeams}
        />
        <ResultSelect/>
      </Stack>
    </NewMatchContext.Provider>
  );
}