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
import { NewMatchContext } from '../contexts/NewMatchContext';
import { NEW_MATCH_ACTIONS } from '../constants/NEW_MATCH_ACTIONS';
import NewMatchSelect from './NewMatchSelect';

export default function NewMatch() {
  const { newMatchState, resetMatchState } = React.useContext(NewMatchContext)
  const { state } = React.useContext(UserContext)

  const homeTeams = state.userData.teamsData.teams_current;
  const awayTeams = newMatchState.allTeams;
  const courtOptions = newMatchState.allCourts;
  const resultOptions = [ {id: 0, name: 'L'}, {id: 1, name: 'W'}]
  console.log("new match state", newMatchState);

  const handleMatchSubmit = async (event) => {
    console.log("THIS IS RUNNING")
    event.preventDefault();

    const courtId = newMatchState.courtSelection;
    let winnerTeamId;
    let otherTeamId;
    newMatchState.resultSelection === 1 ? [winnerTeamId, otherTeamId] = [newMatchState.homeTeamSelection, newMatchState.awayTeamSelection]
      : [otherTeamId, winnerTeamId] = [newMatchState.homeTeamSelection, newMatchState.awayTeamSelection];

    try {
      const response = await fetch(`/api/matches/create/${winnerTeamId}/${otherTeamId}/${courtId}`, {
        method: 'GET',
      });

      if (response.ok) {
        console.log('Success!!!')
        resetMatchState()
      } else {
        console.error('Error when logging match result');
        resetMatchState()
      }
    } catch (error) {
      console.error('Error when logging match result', error);
    }
  };

  return (
    <form onSubmit={handleMatchSubmit}>
      <DialogTitle>Log Match Result</DialogTitle>
      <DialogContent>
        <Box width={400} onSubmit={handleMatchSubmit}>
          <Stack spacing={2}>
            <NewMatchSelect
            selectType={"Home Team"}
            selectState={newMatchState.homeTeamSelection} 
            options={homeTeams} 
            />
            <NewMatchSelect
            selectType={"Away Team"}
            selectState={newMatchState.awayTeamSelection} 
            options={awayTeams} 
            />
            <NewMatchSelect
            selectType={"Result"}
            selectState={newMatchState.resultSelection} 
            options={resultOptions} 
            />
            <NewMatchSelect
            selectType={"Court"}
            selectState={newMatchState.courtSelection} 
            options={courtOptions} 
            />
            
          </Stack>
        </Box>

      </DialogContent>
      <DialogActions>
        <Button onClick={resetMatchState}>Cancel</Button>
        <Button type="submit">Ok</Button>
      </DialogActions>
    </form>
  );
}