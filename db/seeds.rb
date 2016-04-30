# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Happening.create([
  { user_id: 1, date: DateTime.now, lat: 37.754936, lng: -122.427295,
    title: "Watts Home", body: "This is where I grew up", game: "Street Fighter"},
  { user_id: 1, date: DateTime.now, lat: 37.769271, lng: -122.440138,
    title: "Buena Vista Park", body: "A park", game: "Smash"},
  { user_id: 1, date: DateTime.now, lat: 37.738529, lng: -122.453270,
    title: "Under The Cross", body: "Not The Cross though", game: "Street Fighter"},
  { user_id: 1, date: DateTime.now, lat: 37.743416, lng: -122.416019,
    title: "??????", body: "WHERE AM I", game: "Mario Kart"},
  { user_id: 1, date: DateTime.now, lat: 37.791657, lng: -122.467518,
    title: "Golf Course", body: "This one is a little random", game: "Legue of Legends"},
  ])

Image.create([
  { happening_id: 1, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886408/Smash_i757ik.jpg'},
  { happening_id: 2, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886408/Showdown_streetfighter_xi6tic.jpg'},
  { happening_id: 3, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886412/Showdown_Overview_obv3ku.jpg'},
  { happening_id: 4, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886409/DSC_5325_tnh5hy.jpg'},
  { happening_id: 5, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886410/CEO_FGC_pnjhpt.jpg'},
  ])
User.create( { username: 'guest', password: 'password' })
