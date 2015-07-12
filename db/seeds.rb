require 'faker'
user = User.new(name: "user", password: ENV["PASSWORD"])
user.save!
System.create(name: Faker::Lorem.word, description: Faker::Lorem.paragraph, user_id: User.last.id)
Location.create(name: 'California', description: 'The Golden State', system_id: 1)
Location.create(name: 'Oakland', description: 'A lovely city in the San Francisco bay area', system_id: 1, parent_location_id: 1, system_id: 1)
Aspect.create(name: 'Warm weather', aspectable_id: 1, aspectable_type: 'location')