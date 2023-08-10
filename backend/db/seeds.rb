# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb
require 'faker'

# Custom basketball court names
BASKETBALL_COURT_NAMES = [
  'Main Street Court',
  'Riverside Park Court',
  'Downtown Arena',
  'Central Hoops',
  'Sunset Heights Gym'
].freeze

# Seed Players
players = []
10.times do
  players << Player.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    avatar_picture: Faker::LoremFlickr.image,
    description: Faker::Lorem.paragraph,
    elo_rating: Faker::Number.between(from: 1000, to: 2500)
  )
end

# Seed Teams
teams = []
5.times do
  teams << Team.create!(
    name: Faker::Sports::Football.team,
    picture: Faker::LoremFlickr.image,
    description: Faker::Lorem.paragraph
  )
end

# Seed PlayAreas
play_areas = []
BASKETBALL_COURT_NAMES.each do |court_name|
  play_areas << PlayArea.create!(
    name: court_name,
    description: Faker::Lorem.paragraph,
    image: Faker::LoremFlickr.image,
    num_courts: Faker::Number.between(from: 1, to: 5),
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    net_height: Faker::Number.between(from: 0, to: 2),
    is_lined: [0,1].sample,
    is_public: [0,1].sample,
    has_rentals: [0,1].sample,
    has_restrooms: [0,1].sample,
  )
end

# Seed RosterRecords
teams.each do |team|
  players.sample(5).each do |player|
    RosterRecord.create!(
      team: team,
      player: player,
      joined_at: Faker::Time.between(from: 2.years.ago, to: 1.year.ago),
      left_at: [nil, Faker::Time.between(from: 1.year.ago, to: Date.today)].sample,
      is_active: Faker::Boolean.boolean
    )
  end
end

# Method to create MatchRosters for a match
def create_match_rosters(match)
  match.winner_team.players.each do |player|
    MatchRoster.create!(
      match: match,
      team: match.winner_team,
      player: player
    )
  end
  match.other_team.players.each do |player|
    MatchRoster.create!(
      match: match,
      team: match.other_team,
      player: player
    )
  end
end

# Seed Matches
matches = 10.times.map do
  winner_team = teams.sample
  {
    winner_team: winner_team,
    other_team: (teams - [winner_team]).sample,
    play_area: play_areas.sample,
    created_at: Faker::Time.between(from: 30.days.ago, to: Date.today),
    is_validated: Faker::Boolean.boolean,
    created_by: players.sample
  }
end

matches = Match.create!(matches)

# Seed MatchRosters for each match
matches.each do |match|
  create_match_rosters(match)
end

# Seed captains for each team
Team.all.each do |team|
  # Set captain_id for each team. Just using the first player of a team.
  captain = team.players.first
  team.update(captain: captain) if captain
end

