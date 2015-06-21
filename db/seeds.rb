require 'faker'
System.create(name: Faker::Lorem.word, description: Faker::Lorem.paragraph)
user = User.new(name: "user", password: ENV["PASSWORD"])
user.save!