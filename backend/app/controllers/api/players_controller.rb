module Api
  class PlayersController < ApplicationController
    def show
      @player_id = params[:id]
      @Player = Player.find_by_id(@player_id)
      
      render json: @Player
    end 
  
    def index
      @Players = Player.all
      render json: @Players
    end
    
    def player_matches
      @player_id = params[:id]
      @Player = Player.find_by_id(@player_id)
      @match_history = @Player.matches_played
  
      render json: @match_history
    end
  
    def player_teams
      @player_id = params[:id]
      @Player = Player.find_by_id(@player_id)
      @teams_current = @Player.teams_current
      @teams_history = @Player.teams_history
      response_data = {
        teams_current: @teams_current,
        teams_history: @teams_history
      }
      
      render json: response_data
    end
  
    def player_playarea_favorite
      @player_id = params[:id]
      @Player = Player.find_by_id(@player_id)
      @favorite_playarea = @Player.most_played_play_area_with_count
  
      render json: @favorite_playarea
    end
  end
end
