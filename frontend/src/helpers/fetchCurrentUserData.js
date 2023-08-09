const fetchCurrentUserData = async (playerId) => {
  try {
    // Fetch data
    const playerRes = await fetch(`api/players/${playerId}`);
    const matchesRes = await fetch(`api/players/${playerId}/matches`);
    const teamsRes = await fetch(`api/players/${playerId}/teams`);
    const playAreaRes = await fetch(`api/players/${playerId}/playarea/favorite`);
    // Parse JSON
    const playerData = await playerRes.json();
    const matchesData = await matchesRes.json();
    const teamsData = await teamsRes.json();
    const playAreaData = await playAreaRes.json();
    // Bundle and return
    const currentUserData = {
      playerData,
      matchesData,
      teamsData,
      playAreaData,
    };
    return currentUserData;
  }
  catch (error) {
    console.log(error);
  }
};

export { fetchCurrentUserData };