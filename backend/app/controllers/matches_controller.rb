class MatchesController < ApplicationController
  def show
    @match_id = params[:id]
    @Match = Match.find_by_id(@match_id)
    
    render json: @Match
  end
  def index
    render json: Match.all
  end
end
