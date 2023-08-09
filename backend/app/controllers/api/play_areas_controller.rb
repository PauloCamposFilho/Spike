module Api
  class PlayAreasController < ApplicationController
    include MatchRosterHelper
    def index
      @PlayAreas = PlayArea.all
      render json: @PlayAreas
    end

    def show
      @play_area_id = params[:id]
      @PlayArea = PlayArea.find_by_id(@play_area_id)
      render json: @PlayArea
    end

    def matches_history
      @play_area_id = params[:id]
      @play_area = PlayArea.find_by_id(@play_area_id)
      @matches = @play_area.matches.includes(match_rosters: [:team, :player])
      puts @matches.first.id

      response_data = @matches.map do |match|
        {
          match: match,
          winner: {
            team: match.winner_team,
            roster: match_roster_for_team(match, match.winner_team)
          },
          loser: {
            team: match.other_team,
            roster: match_roster_for_team(match, match.other_team)
          }
        }
      end
      render json: response_data
    end    
  end
end
