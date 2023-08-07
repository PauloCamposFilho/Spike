class Team < ApplicationRecord
  validates :name, presence: true
  
  has_many :roster_records
  has_many :players, through: :roster_records
  has_many :matches_as_winner, foreign_key: 'winner_team_id', class_name: 'Match'
  has_many :matches_as_other_team, foreign_key: 'other_team_id', class_name: 'Match'
end
