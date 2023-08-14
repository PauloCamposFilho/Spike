import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, DialogActions, DialogContent, DialogTitle, FormGroup, Stack } from '@mui/material';
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
    <form onSubmit={handleMatchSubmit}>
      <DialogTitle>Log Match Result</DialogTitle>
      <DialogContent>
        <Box width={400} onSubmit={handleMatchSubmit}>
            <Stack spacing={2}>
              <Button variant="contained" size="large" onClick={chooseNewMatchModal}>New Match</Button>
              <Button variant="contained" size="large">Create Team</Button>
            </Stack>
            <Stack spacing={2}>
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
            </Stack>
        </Box>

      </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" onClick={onClose}>Ok</Button>
        </DialogActions>
    </form>
  );
}