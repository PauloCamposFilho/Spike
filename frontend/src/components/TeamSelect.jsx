import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../contexts/UserContext';

export default function TeamSelect(props) {
  const { state } = React.useContext(UserContext)
  const [team, setTeam] = React.useState('');
  const { teamType } = props
  
  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  let teams;
  if (teamType === "home") {
    teams = state.userData.teamsData.teams_current;
  } else {
    teams = null;
  }
  console.log("modal teams", teams)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{teamType === "home" ? "Home Team" : "Away Team"}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label={teamType === "home" ? "Home Team" : "Away Team"}
          onChange={handleChange}
        >
        {teams.map((team, index) => {
          return (
            <MenuItem value={team.team.name}>{team.team.name}</MenuItem>
          )
        })}
        </Select>
      </FormControl>
    </Box>
  );
}