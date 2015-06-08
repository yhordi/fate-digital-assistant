require 'faker'
System.create(name: Faker::Lorem.word, description: Faker::Lorem.paragraph)
User.create(name: "user", password: ENV["PASSWORD"])