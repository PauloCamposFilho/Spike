import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ResultSelect() {
  const [result, setResult] = React.useState('');

  const handleChange = (event) => {
    setResult(event.target.value);
  };

  return (
    <Box sx={{minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Result</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={result}
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