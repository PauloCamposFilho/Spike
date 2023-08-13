import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../contexts/UserContext';
import { NewMatchContext } from '../contexts/NewMatchContext';

export default function TeamSelect(props) {
  const { newMatchState, dispatch, makeSelection } = React.useContext(NewMatchContext)
  const { teamType, teams } = props
  
  const handleChange = (event) => {
    makeSelection(teamType, event.target.value);
    teamType === "Home Team" ?
    console.log("home selected value", newMatchState.homeTeamSelection)
    : console.log("away selected value", newMatchState.awayTeamSelection);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{teamType}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teamType === "Home Team" ? newMatchState.homeTeamSelection : newMatchState.awayTeamSelection}
          label={teamType}
          onChange={handleChange}
        >
        {teams.map((team, index) => {
          return (
            teamType === 'Home Team' ?
            <MenuItem value={team.team.id}>{team.team.name}</MenuItem>
            :
            <MenuItem value={team.id}>{team.name}</MenuItem>
          )
        })}
        </Select>
      </FormControl>
    </Box>
  );
}