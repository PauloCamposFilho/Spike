const fetchCurrentUserData = async (playerId) => {
  try {
    // Fetch data
    const playerRes = await fetch(`/api/players/${playerId}`);
    const matchesRes = await fetch(`/api/players/${playerId}/matches`);
    const teamsRes = await fetch(`/api/players/${playerId}/teams`);
    const teamsMatchesRes = await fetch(`/api/players/${playerId}/teams/matches`);
    const playAreaRes = await fetch(`/api/players/${playerId}/playarea/favorite`);
    const playerRankingsRes = await fetch(`/api/players/rankings`);
    const teamRankingsRes = await fetch(`/api/teams/rankings`);
    if(playerId === 1){
      await fetch(`/api/login/${playerId}`)
    } 
    // Parse JSON
    const playerData = await playerRes.json();
    const matchesData = await matchesRes.json();
    const teamsData = await teamsRes.json();
    const teamsMatchesData = await teamsMatchesRes.json();
    const playAreaData = await playAreaRes.json();
    const playerRankings = await playerRankingsRes.json();
    const teamRankings = await teamRankingsRes.json();
    // Bundle and return
    const currentUserData = {
      playerData,
      matchesData,
      teamsData: {
        ...teamsData,
        checked_in_team: {
          teamInfoData: {}
        }
      },
      teamsMatchesData,
      playAreaData,
      rankings: {
        teams: teamRankings,
        playerRankings: playerRankings
      }      
    };
    return currentUserData;
  }
  catch (error) {
    console.log(error);
  }
};

export { fetchCurrentUserData };