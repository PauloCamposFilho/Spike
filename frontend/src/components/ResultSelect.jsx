import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NewMatchContext } from '../contexts/NewMatchContext';

export default function ResultSelect() {
  const { newMatchState, dispatch, makeSelection } = React.useContext(NewMatchContext)

  const handleChange = (event) => {
    makeSelection("Result", event.target.value);
  };

  return (
    <Box sx={{minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Result</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newMatchState.resultSelection}
          label="Result"
          onChange={handleChange}
        >
          <MenuItem value={'W'}>W</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}