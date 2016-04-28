# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Happening.create([
  { user_id: 1, date: DateTime.now, lat: 37.754936, lng: -122.427295,
    title: "Watts Home", body: "This is where I grew up", game: "Street Fighter", image: 'image'},
  { user_id: 1, date: DateTime.now, lat: 37.769271, lng: -122.440138,
    title: "Buena Vista Park", body: "A park", game: "Smash", image: 'image'},
  { user_id: 1, date: DateTime.now, lat: 37.738529, lng: -122.453270,
    title: "Under The Cross", body: "Not The Cross though", game: "Street Fighter", image: 'image'},
  { user_id: 1, date: DateTime.now, lat: 37.743416, lng: -122.416019,
    title: "??????", body: "WHERE AM I", game: "Mario Kart", image: 'image'},
  { user_id: 1, date: DateTime.now, lat: 37.791657, lng: -122.467518,
    title: "Golf Course", body: "This one is a little random", game: "Legue of Legends", image: 'image'},
  ])

User.create( { username: 'guest', password: 'password' })
