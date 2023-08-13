import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, FormGroup, Stack } from '@mui/material';
import TeamSelect from './TeamSelect';
import ResultSelect from './ResultSelect';
import { UserContext } from '../contexts/UserContext';
import { useNewMatch } from '../hooks/useNewMatch';
import { NewMatchContext } from '../contexts/NewMatchContext';
import { NEW_MATCH_ACTIONS } from '../constants/NEW_MATCH_ACTIONS';

export default function NewMatch() {
  const { newMatchState } = React.useContext(NewMatchContext)
  const { state } = React.useContext(UserContext)

  const homeTeams = state.userData.teamsData.teams_current;
  const awayTeams = newMatchState.allTeams;
  console.log("new match state", newMatchState);

  return (
    <FormGroup>
      <TeamSelect
        teamType={"Home Team"}
        teams={homeTeams}
      />
      <TeamSelect
        teamType={"Away Team"}
        teams={awayTeams}
      />
      <ResultSelect
      />
    </FormGroup>
  );
}