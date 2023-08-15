const fetchCurrentPlayAreaData = async (play_area_id) => {
  try {
    // Fetch data
    const play_area = await fetch(`/api/play_areas/${play_area_id}`);
    const area_matches_res = await fetch(`/api/play_areas/${play_area_id}/matches`);
    // Parse JSON
    const current_play_area_data = await play_area.json();
    const area_matches_data = await area_matches_res.json();
    return {
      ...current_play_area_data, area_matches_data: area_matches_data
    }
  }
  catch (error) {
    console.log(error);
  }
};

const fetchPlayAreaData =async () => {
  const play_area_list = await fetch('/api/play_areas');
  const play_areas_data = await play_area_list.json();
  const playAreaListData = play_areas_data

  return playAreaListData;
}

export { fetchPlayAreaData , fetchCurrentPlayAreaData };