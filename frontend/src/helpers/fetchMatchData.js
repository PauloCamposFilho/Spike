const fetchMatchData = async (matchId) => {
  const matchDataRes = await fetch(`/api/matches/${matchId}`);
  const matchDataJson = await matchDataRes.json();
  return matchDataJson;
};

export { fetchMatchData };