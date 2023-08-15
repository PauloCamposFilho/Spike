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
embedLinks = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166720.69967542592!2d-122.95311368575074!3d49.23828193350067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f24e780bc05%3A0xc828436e5100e4ee!2sRotary%20Centennial%20Beach%20Volleyball%20Courts%20(6)!5e0!3m2!1sen!2sca!4v1692045556052!5m2!1sen!2sca', 
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166752.48105471488!2d-123.05954373946165!3d49.22886629665694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dbdb3563485d%3A0x2e54d5f14a69a3f5!2sVolleyball%20Courts!5e0!3m2!1sen!2sca!4v1692045617133!5m2!1sen!2sca',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166747.9407624939!2d-123.14400113692257!3d49.23021149751479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486715381c97bad%3A0x9aaeffa12000003a!2sMahon%20Park%20Beach%20Volleyball%20Court!5e0!3m2!1sen!2sca!4v1692045672421!5m2!1sen!2sca',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166769.12906401663!2d-123.22090543379758!3d49.2239335801419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674e580398cd3%3A0x831d6a83b8692802!2sMarpole%20Public%20Beach%20Volleyball%20Courts!5e0!3m2!1sen!2sca!4v1692045689102!5m2!1sen!2sca',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166720.69967542592!2d-122.95311368575074!3d49.23828193350067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f24e780bc05%3A0xc828436e5100e4ee!2sRotary%20Centennial%20Beach%20Volleyball%20Courts%20(6)!5e0!3m2!1sen!2sca!4v1692045556052!5m2!1sen!2sca'
]
BASKETBALL_COURT_NAMES.each do |court_name|
  play_areas << PlayArea.create!(
    name: court_name,
    description: Faker::Lorem.paragraph,
    image: Faker::LoremFlickr.image,
    num_courts: Faker::Number.between(from: 1, to: 5),
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    net_height: Faker::Number.between(from: 0, to: 2),
    embedLink: embedLinks.pop,
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

