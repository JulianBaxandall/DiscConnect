
ursa = Team.create(name:"Ursa Major", description: "A goated men's college team hailing from UC Berkeley", division:"Men's D-I College")
rabbits = Team.create(name:"The Rabbits", description: "The 5th best team in all of the BUDA summer league", division:"Buda Mixed Summer League")
donkeys = Team.create(name:"Haverford Donkeys", description: "Heehaw heehaw hear the donkeys roar", division:"Men's D-III College")
ruckus = Team.create(name:"UVM Ruckus", description: "The lean mean throwing machine from the north", division:"Women's D-I College")


julian = User.create(email: "myemail@gmail.com", name:"Julian", password: "111111", password_confirmation: "111111")
phin = User.create(email: "youremail@gmail.com", name:"Phin", password: "111111", password_confirmation: "111111")
nellie = User.create(email: "heremail@gmail.com", name:"Nellie", password: "111111", password_confirmation: "111111")
freddie = User.create(email: "freddie@gmail.com", name:"Freddie", password: "111111", password_confirmation: "111111")
eli = User.create(email: "eli@gmail.com", name:"Eli", password: "111111", password_confirmation: "111111")
sophie = User.create(email: "sophie@gmail.com", name:"Sophie", password: "111111", password_confirmation: "111111")


Registration.create(user_id:julian.id, team_id: ursa.id)
Registration.create(user_id:julian.id, team_id: rabbits.id)
Registration.create(user_id:nellie.id, team_id: ruckus.id)
Registration.create(user_id:nellie.id, team_id: rabbits.id)
Registration.create(user_id:freddie.id, team_id: donkeys.id, role:"captain")
Registration.create(user_id:freddie.id, team_id: rabbits.id)
Registration.create(user_id:eli.id, team_id: rabbits.id)
Registration.create(user_id:phin.id, team_id: rabbits.id)
Registration.create(user_id:sophie.id, team_id: rabbits.id)