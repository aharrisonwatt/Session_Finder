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
  { happening_id: 2, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12743503_10153377170664103_977909666938449465_n.jpg?oh=a6d8171e1ed63b541e76e25bde8f37ef&oe=57E1C3EA'},
  { happening_id: 1, image_url: 'http://res.cloudinary.com/awatt/image/upload/v1461886408/Showdown_streetfighter_xi6tic.jpg'},
  { happening_id: 3, image_url: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13165845_1140435315991091_632727227183451541_n.jpg?oh=76cc8a260cd86376133f1349ce07451e&oe=57E1CDA0'},
  { happening_id: 4, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12106747_1682001702040626_3366909897101052916_n.jpg?oh=b5f45523f69dd7b3aca312299ab1cc5f&oe=57E5BA2A'},
  { happening_id: 5, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/11178226_2839345256849_8616719376877153538_n.jpg?oh=73608ac32ddb222c03c30ad13020b49e&oe=579C560D'},
  { happening_id: 6, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10347425_10152153920596533_1945595485922499993_n.jpg?oh=02d15fe37c87e90fede82db799da8fa5&oe=57AE9403'},
  { happening_id: 7, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/1424278_10152004770384265_1932674344_n.jpg?oh=3d40a296d85d0c26f8035d14cc87d18d&oe=57B6071B'},
  { happening_id: 8, image_url: 'http://www.ptbpro.org/ESports/Absolute-Battle/Absolute-Battle-6-Vol-II/i-SmsmSnj/0/X3/ab6_event_daythree_vol2-130-X3.jpg'},
  { happening_id: 9, image_url: 'http://www.ptbpro.org/ESports/Halo-5-Midnight-Launch/i-bC9JbbD/0/X3/halo5_launch-30-X3.jpg'},
  { happening_id: 10, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/11223312_1198354756850572_7487441950854360131_n.jpg?oh=24dd8a7547edbdaaf43bdd2d5cc969ea&oe=579ABD28'},
  { happening_id: 11, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12801545_1197198876966160_7887672107051553724_n.jpg?oh=633e784505c4465b1bcb52fd768e19c9&oe=57AA4B19'},
  { happening_id: 12, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/74955_1180292698656778_5738530942936964157_n.jpg?oh=13e7d73048ac962cc84c0a120aff20fb&oe=57B67B5F'},
  { happening_id: 13, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12742511_1163536103665771_4171179976420554256_n.jpg?oh=b3260e80b0f49e84de928a722dd642c4&oe=579E5FED'},
  { happening_id: 14, image_url: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10419388_990096957676354_3168886750439369765_n.jpg?oh=48bbbe5d329b623ad9d708f7a9e78ed5&oe=579D2002'},
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
