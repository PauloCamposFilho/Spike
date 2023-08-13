import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import TeamSelect from './TeamSelect';
import ResultSelect from './ResultSelect';

export default function NewMatch() {
  const [homeTeam, setHomeTeam] = React.useState({name: '', id: 0});

  return (
    <Stack spacing={2}>
      <TeamSelect
        teamType={"home"}
      />
      <TeamSelect
        teamType={"home"}
      />
      <ResultSelect/>
    </Stack>
  );
}