import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../contexts/UserContext';

export default function TeamSelect(props) {
  const [teamSelection, setTeamSelection] = React.useState('');
  const { teamType, teams } = props
  
  const handleChange = (event) => {
    setTeamSelection(event.target.value);
    console.log("selected value", teamSelection);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{teamType}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teamSelection}
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