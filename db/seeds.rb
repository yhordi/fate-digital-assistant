require 'faker'
user = User.new(name: "user", password: ENV["PASSWORD"])
user.save!
System.create(name: Faker::Lorem.word, description: Faker::Lorem.paragraph, user_id: User.last.id)