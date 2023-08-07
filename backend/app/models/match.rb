class Match < ApplicationRecord
  belongs_to :winner_team, class_name: 'Team'
  belongs_to :other_team, class_name: 'Team'
  belongs_to :play_area
  belongs_to :created_by, class_name: 'Player'

  has_many :match_rosters
  has_many :teams, through: :match_rosters
  has_many :players, through: :match_rosters
end
