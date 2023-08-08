class TeamsController < ApplicationController
  def show
    @team_id = params[:id]
    @Team = Team.find_by_id(@team_id)

    render json: @Team.as_json(methods: :average_elo_rating)
  end

  def index
    @Teams = Team.all
    render json: @Teams
  end

  def team_matches
    @team_id = params[:id]
    @Team = Team.find_by_id(@team_id)
    @matches_played = @Team.matches_played
    @matches_won = @Team.matches_as_winner
    @matches_lost = @Team.matches_as_other_team
    response_data = {
      matches: @matches_played,
      wins: @matches_won,
      losses: @matches_lost
    }
    render json: response_data
  end

  def players_current
    @team_id = params[:id]
    @Team = Team.find_by_id(@team_id)
    @players_current = @Team.players_current
    
    render json: @players_current
  end

  def players_history
    @team_id = params[:id]
    @Team = Team.find_by_id(@team_id)
    @players_history = @Team.players_history
    render json: @players_history
  end
end
