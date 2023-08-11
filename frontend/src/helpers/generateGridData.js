const generateGridData = (player_current_teams) => {
  const gridData = [];
  for (const team of player_current_teams) {
    for (const player of team.roster) {
      gridData.push({ id: player.id, firstName: player.first_name, lastName: player.last_name, teamName: team.team.name });
    }
  }
  return gridData;
};

export default generateGridData