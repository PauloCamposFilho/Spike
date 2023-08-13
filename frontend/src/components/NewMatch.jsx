import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import TeamSelect from './TeamSelect';
import ResultSelect from './ResultSelect';
import { UserContext } from '../contexts/UserContext';

export default function NewMatch() {
  const { state } = React.useContext(UserContext)

  const [allTeams, setAllTeams] = React.useState([]);

  React.useEffect(() => {
    const fetchAllTeamsData = async () => {
      try {
        const allTeamsRes = await fetch('/api/teams')
        const allTeamsData = await allTeamsRes.json()
        setAllTeams(allTeamsData);
      } catch (error) {
        console.error('Error fetching all teams data:', error)
      }
    }
    fetchAllTeamsData();
  }, [])

  const homeTeams = state.userData.teamsData.teams_current;
  const awayTeams = allTeams;

  return (
    <Stack spacing={2}>
      <TeamSelect
        teamType={"Home Team"}
        teams={homeTeams}
      />
      <TeamSelect
        teamType={"Away Team"}
        teams={awayTeams}
      />
      <ResultSelect/>
    </Stack>
  );
}