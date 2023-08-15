import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../contexts/UserContext';
import { NewMatchContext } from '../contexts/NewMatchContext';

export default function NewMatchSelect(props) {
  const { makeSelection } = React.useContext(NewMatchContext)
  const { selectType, selectState, options } = props

  const handleChange = (event) => {
    makeSelection(selectType, event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{selectType}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectState}
        label={selectType}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <MenuItem value={option.id}>{option.name}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}