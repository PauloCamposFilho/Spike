# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

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
10.times do
  Player.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    avatar_picture: Faker::LoremFlickr.image,
    description: Faker::Lorem.paragraph,
    elo_rating: Faker::Number.between(from: 1000, to: 2500)
  )
end

# Seed Teams
5.times do
  Team.create!(
    name: Faker::Sports::Football.team,
    picture: Faker::LoremFlickr.image,
    description: Faker::Lorem.paragraph
  )
end

# Seed PlayAreas
BASKETBALL_COURT_NAMES.each do |court_name|
  PlayArea.create!(
    name: court_name,
    description: Faker::Lorem.paragraph,
    image: Faker::LoremFlickr.image,
    num_courts: Faker::Number.between(from: 1, to: 5),
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude
  )
end

# Seed Matches
10.times do
  winner_team = Team.all.sample
  other_team = Team.where.not(id: winner_team.id).sample
  created_by = Player.all.sample
  play_area = PlayArea.all.sample

  Match.create!(
    winner_team: winner_team,
    other_team: other_team,
    play_area: play_area,
    created_at: Faker::Time.between(from: 30.days.ago, to: Date.today),
    is_validated: Faker::Boolean.boolean,
    created_by: created_by
  )
end
