require 'faker'
include DefaultSkillsHelper

user = User.new(name: "user", password: ENV["PASSWORD"])
user.save!
no_conflict = "This skill is not used for conflicts."
no_attack = "This skill is not used for attacks."
no_defense = "This skill is not used for defense."
a = System.create(name: Faker::Book.title, description: Faker::Lorem.paragraph, user_id: User.last.id)
a.seed_defaults(a.id, DefaultSkillsHelper.defaults(a.id))
5.times do
  Npc.create({name: Faker::Name.name, npc_type: 'Main', system_id: 1})
end

