class MatchesController < ApplicationController
  def show
    @match_id = params[:id]
    @Match = Match.find_by_id(@match_id)

    render json: @Match
  end

  def index
    render json: Match.all
  end

  def teams
    @match_id = params[:id]
    @Match = Match.find_by_id(@match_id)
    @winning_team = Team.includes(:roster_records, :players).find_by_id(@Match.winner_team_id)
    @losing_team = Team.includes(:roster_records, :players).find_by_id(@Match.other_team_id)

    response_data = {
      winner: @winning_team.as_json(include: [:players], methods: :average_elo_rating),
      loser: @losing_team.as_json(include: [:players], methods: :average_elo_rating)
    }

    render json: response_data
  end

  def playarea
    @match_id = params[:id]
    @Match = Match.find_by_id(@match_id)
    render json: PlayArea.find_by_id(@Match.play_area_id)
  end
end
