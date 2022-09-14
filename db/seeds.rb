
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


Registration.create(user_id:julian.id, team_id: ursa.id, role:"captain")
Registration.create(user_id:julian.id, team_id: rabbits.id, role:"captain")
Registration.create(user_id:nellie.id, team_id: ruckus.id)
Registration.create(user_id:nellie.id, team_id: rabbits.id)
Registration.create(user_id:freddie.id, team_id: donkeys.id, role:"captain")
Registration.create(user_id:freddie.id, team_id: rabbits.id)
Registration.create(user_id:eli.id, team_id: rabbits.id)
Registration.create(user_id:phin.id, team_id: rabbits.id)
Registration.create(user_id:sophie.id, team_id: rabbits.id)

# Seeding for users trying out the site

donovan = User.create(email: "donovan@gmail.com", name:"Donovan", password: "111111", password_confirmation: "111111")
Registration.create(user_id:donovan.id, team_id: ursa.id)

evan = User.create(email: "evan@gmail.com", name:"Evan", password: "111111", password_confirmation: "111111")
Registration.create(user_id:evan.id, team_id: ursa.id, role:"captain")

andrew = User.create(email: "andrew@gmail.com", name:"Andrew", password: "111111", password_confirmation: "111111")
Registration.create(user_id:andrew.id, team_id: ursa.id)

vik = User.create(email: "vikram@gmail.com", name:"Vikram", password: "111111", password_confirmation: "111111")
Registration.create(user_id:vik.id, team_id: ursa.id)

hiro = User.create(email: "hiro@gmail.com", name:"Hiro", password: "111111", password_confirmation: "111111")
Registration.create(user_id:hiro.id, team_id: ursa.id)

zac = User.create(email: "zac@gmail.com", name:"Zac", password: "111111", password_confirmation: "111111")
Registration.create(user_id:zac.id, team_id: ursa.id)

drew = User.create(email: "drew@gmail.com", name:"Drew", password: "111111", password_confirmation: "111111")
Registration.create(user_id:drew.id, team_id: ursa.id)

Task.create(user_id: julian.id, team_id: ursa.id, title: "Pay your dues", body: "Please pay your dues through the cal rec sports website", urgency: "urgent")
Task.create(user_id: julian.id, team_id: ursa.id, title: "Register for the team", body: "Please log in to the USAU website to accept the invite and register")
Task.create(user_id: julian.id, team_id: ursa.id, title: "Throwing practice", body: "Join us for throwing practice this Thursday", urgency: "not urgent")
Task.create(user_id: julian.id, team_id: ursa.id, title: "Order jerseys", body: "Order jerseys for the team before our first tournament", urgency: "urgent")

Feedback.create(team_id: ursa.id, title: "Great practice last week", body: "I really liked the practice this Thursday. I thought it was a great idea to do drills with the cones so that our footwork can get better before the next tournament")
Feedback.create(team_id: ursa.id, title: "More time to warm up", body: "I would like more time to warm up if that seems possible. Last week my calf started cramping up midway through practice and I think I could use more time stretching before going full speed in practice")