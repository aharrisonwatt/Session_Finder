# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Happening.create([
  { user_id: 1, date: DateTime.now, lat: 37.772296, lng: -122.412911,
    title: "SF Game Night", body: "Game Night is hosted by ShowDown every Tuesday and Thursday at Folsom Street Foundry. We set up a variety of console, PC, and board games as well as offer a great opportunity to meet local fellow gamers and make new friends!
Age Restriction - 21+
Cover - $5
Payment Options - Credit Card or Cash"},
  { user_id: 1, date: DateTime.now, lat: 37.794709, lng: -122.405462,
    title: "Andrew's Birthday Session", body: "Come by and play some games with me for my Birthday! Going to be a great time."},
  { user_id: 1, date: DateTime.now, lat: 37.373817, lng: -122.020768,
    title: "Stadium Sports Bar SFV", body: "FGC Street Fighter V night at Bert's Stadium Sports Bar in Sunnyvale for those that are at least 21 years of age.  A $5 Event Registration Fee is required if you wish to play Street Fighter V However an additional $5 is required if you do wish to enter the tournament bracket.  The bar closes at 2am."},
  { user_id: 1, date: DateTime.now, lat: 37.775426, lng: -122.275429,
    title: "Lets get Crazy", body: "Get crazy again and play some more games.  Come through and see if you are as crazy as me when it comes to games!"},
  { user_id: 1, date: DateTime.now, lat: 37.782093, lng: -122.449343,
    title: "Pool Hall Breakers", body: "Time to take over the pool hall again.  Come out out and try not to scratch out against the competition."},
  { user_id: 1, date: DateTime.now, lat: 37.782093, lng: -122.449343,
    title: "Warehouse TakeDown", body: "See if you are King of the Warehouse.  We are around every Wednesday Night"},
  { user_id: 1, date: DateTime.now, lat: 37.755885, lng: -122.390614,
    title: "Homebrew", body: "Another Session at my pad.  You guys should know the rules."},
  { user_id: 1, date: DateTime.now, lat: 37.803121, lng: -122.282639,
    title: "Absolute Battle", body: "Do you think you have what it takes? Show up and find out."},
  { user_id: 1, date: DateTime.now, lat: 37.782093, lng: -122.449343,
    title: "Microsoft Store Halo", body: "Time to take over the pool hall again.  Come out out and try not to scratch out against the competition."},
  { user_id: 1, date: DateTime.now, lat: 38.542661, lng: -121.525269,
    title: "NorCal Regionals", body: "NorCal Regionals 2016 is set over three days (March 25-27) of heart-pounding competition for fighting game enthusiasts.  Running annually since 2002, NorCal Regionals (also known as NCR) is the longest running and biggest fighting game tournament in Northern California. "},
  { user_id: 1, date: DateTime.now, lat: 37.975508, lng: -122.028215,
    title: "Battle Time", body: "Do you like to battle? We do and we battle all the time.  Come battle with us if you think you can survive."},
  { user_id: 1, date: DateTime.now, lat: 37.484575, lng: -122.147924,
    title: "Hacker Fighter", body: "HackerFight is a fighting game tournament between the top tech companies in the Bay Area. Organized by engineers, and just for fun."},
  { user_id: 1, date: DateTime.now, lat: 37.826309, lng: -122.422628,
    title: "Lupe vs Diago", body: "Lupe Fiaso Vs Diago, the rematch.  This time we are taking it to the next level and pitting our competitors against each other on Alcatraz!"},
  { user_id: 1, date: DateTime.now, lat: 37.754982, lng: -122.426928,
    title: "Taking over Watt's House", body: "Watts up everyone.  I got the house again so lets play some rounds.  I got a bunch of food already but BYOB."},
  ])

Image.create([
  { happening_id: 2, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273763/14138691_1824986801065982_1030779938059210097_o_hby2tt.jpg'},
  { happening_id: 1, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886408/Showdown_streetfighter_xi6tic.jpg'},
  { happening_id: 3, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273762/14125691_1824986861065976_8234143090300018605_o_zvywwh.jpg'},
  { happening_id: 4, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273762/13920026_1812943105603685_4751867285150794939_o_h2cyhn.jpg'},
  { happening_id: 5, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273762/13603790_1795047897393206_461153523118726913_o_weayba.jpg'},
  { happening_id: 6, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273762/13559209_1795040884060574_2671881236008071993_o_ibmbzc.jpg'},
  { happening_id: 7, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273761/13558971_1795040590727270_1972339033021461110_o_xhl5qp.jpg'},
  { happening_id: 8, image_url: 'http://www.ptbpro.org/ESports/Absolute-Battle/Absolute-Battle-6-Vol-II/i-SmsmSnj/0/X3/ab6_event_daythree_vol2-130-X3.jpg'},
  { happening_id: 9, image_url: 'http://www.ptbpro.org/ESports/Halo-5-Midnight-Launch/i-bC9JbbD/0/X3/halo5_launch-30-X3.jpg'},
  { happening_id: 10, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273761/13558940_1795047954059867_2291421193862324397_o_br85zp.jpg'},
  { happening_id: 11, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273760/12744052_1735995739965089_7496259105430688442_n_trcynd.jpg'},
  { happening_id: 12, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1475273760/11088979_1623836341181030_8027423086468428184_o_kaui2h.jpg'},
  { happening_id: 13, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886410/CEO_FGC_pnjhpt.jpg'},
  { happening_id: 14, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886408/Smash_i757ik.jpg'},
  ])

Tag.create([
  { name: 'Street Fighter V'},
  { name: 'SSBM'},
  { name: 'Smash 4'},
  { name: 'Mortal Kombat'},
  { name: 'Halo'},
  ])

Tagging.create([
  { happening_id: 1, tag_id: 1},
  { happening_id: 1, tag_id: 2},
  { happening_id: 1, tag_id: 3},
  { happening_id: 2, tag_id: 1},
  { happening_id: 2, tag_id: 5},
  { happening_id: 3, tag_id: 1},
  { happening_id: 4, tag_id: 4},
  { happening_id: 4, tag_id: 1},
  { happening_id: 5, tag_id: 2},
  { happening_id: 6, tag_id: 3},
  { happening_id: 6, tag_id: 4},
  { happening_id: 7, tag_id: 2},
  { happening_id: 7, tag_id: 1},
  { happening_id: 8, tag_id: 1},
  { happening_id: 8, tag_id: 3},
  { happening_id: 9, tag_id: 5},
  { happening_id: 10, tag_id: 1},
  { happening_id: 10, tag_id: 2},
  { happening_id: 10, tag_id: 3},
  { happening_id: 10, tag_id: 4},
  { happening_id: 11, tag_id: 1},
  { happening_id: 11, tag_id: 5},
  { happening_id: 12, tag_id: 1},
  { happening_id: 12, tag_id: 2},
  { happening_id: 13, tag_id: 1},
  { happening_id: 14, tag_id: 1},
  ])

User.create( { username: 'guest', password: 'password' })
