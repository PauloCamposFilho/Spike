class Player < ApplicationRecord
  validates :first_name, :last_name, presence: true
  validates :elo_rating, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  has_many :roster_records
  has_many :teams, through: :roster_records
  has_many :match_rosters
  has_many :matches, through: :match_rosters
  has_many :matched_teams, through: :match_rosters, source: :team
end
