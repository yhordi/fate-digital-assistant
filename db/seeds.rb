require 'faker'
# user = User.new(name: "user", password: ENV["PASSWORD"])
# user.save!
no_conflict = "This skill is not used for conflicts."
no_attack = "This skill is not used for attacks."
no_defense = "This skill is not used for defense."
a = System.create(name: Faker::Book.title, description: Faker::Lorem.paragraph, user_id: User.last.id)
# Adventure.create(title: Faker::Book.title)
a.seed_defaults(a.id)
