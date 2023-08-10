module MatchesHelper
  private

  def authorized_to_create?(player_id, winner_team, other_team)
    winner_team.players_current.exists?(id: player_id) ||
    other_team.players_current.exists?(id: player_id)
  end

  def authorized_to_validate?(match)
    player_id = session[:user_id]
    MatchRoster.exists?(match: match, player_id: player_id)
  end

  def authorized_to_delete?(match)
    player_id = session[:user_id]
    match.created_by_id == player_id && !match.is_validated
  end
end
