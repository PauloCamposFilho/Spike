import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TeamSelect() {
  const [homeTeam, setHomeTeam] = React.useState('');

  const handleChange = (event) => {
    setHomeTeam(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Home Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={homeTeam}
          label="Home Team"
          onChange={handleChange}
        >
          <MenuItem value={"Ducks"}>Ducks</MenuItem>
          <MenuItem value={"Chickens"}>Chickens</MenuItem>
          <MenuItem value={"Hamsters"}>Hamsters</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}