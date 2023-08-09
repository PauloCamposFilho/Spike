module Api
  class MatchesController < ApplicationController
    include MatchRosterHelper
    def show
      @match_id = params[:id]
      @Match = Match.find_by_id(@match_id)

      render json: @Match
    end

    def index
      render json: Match.all
    end

    def playarea
      @match_id = params[:id]
      @Match = Match.find_by_id(@match_id)
      render json: PlayArea.find_by_id(@Match.play_area_id)
    end

    def teams
      @match_id = params[:id]
      @match = Match.find_by_id(@match_id)

      @winning_team = @match.winner_team
      @losing_team = @match.other_team

      response_data = {
        winner: {
          team: @winning_team,
          roster: match_roster_for_team(@match, @winning_team)
        },
        loser: {
          team: @losing_team,
          roster: match_roster_for_team(@match, @losing_team)
        }
      }

      render json: response_data
    end
  end
end
