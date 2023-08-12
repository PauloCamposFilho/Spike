module TeamsHelper
  private

  def add_play_area_name(matches)
    matches.includes(:play_area).map do |match|
      match.as_json.merge(
        play_area_name: match.play_area.name,
        play_area_id: match.play_area.id
      )
    end
  end
end
