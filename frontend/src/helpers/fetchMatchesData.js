const fetchMatchesData = async () => {
  const matchesData = await fetch(`/api/matches`);
  const matchesDataJson = await matchesData.json();
  return matchesDataJson;
};

export { fetchMatchesData }