const fetchTeamData = async (teamId) => {
  try {
    // Fetch data
    const teamInfoRes = await fetch(`/api/teams/${teamId}`);
    const teamMatchesRes = await fetch(`/api/teams/${teamId}/matches`);
    const teamCurrentRosterRes = await fetch(`/api/teams/${teamId}/players/current`);
    const teamPastPlayersRes = await fetch(`/api/teams/${teamId}/players/history`);
    // Parse JSON
    const teamInfoData = await teamInfoRes.json();
    const teamMatchesData = await teamMatchesRes.json();
    const teamCurrentRosterData = await teamCurrentRosterRes.json();
    const teamPastPlayersData = await teamPastPlayersRes.json();
    // Bundle and return
    const teamData = {
      teamInfoData,
      teamMatchesData,
      teamCurrentRosterData,
      teamPastPlayersData,
    };
    return teamData;
  }
  catch (error) {
    console.log(error);
  }
}

export { fetchTeamData }