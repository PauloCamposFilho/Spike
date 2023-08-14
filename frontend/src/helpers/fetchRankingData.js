const fetchRankingData = async () => {
  try {
    const playerRankingsRes = await fetch(`/api/players/rankings`);
    const teamRankingsRes = await fetch(`/api/teams/rankings`);
    const playerRankings = await playerRankingsRes.json();
    const teamRankings = await teamRankingsRes.json();
  
    const rankingData = {
      teams: teamRankings,
      playerRankings: playerRankings
    }   
  
    return rankingData;    
  } catch(error) {
    console.log(error);
  }
};

export { fetchRankingData };