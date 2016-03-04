require 'faker'
# user = User.new(name: "user", password: ENV["PASSWORD"])
# user.save!
System.create(name: Faker::Book.title, description: Faker::Lorem.paragraph, user_id: User.last.id)
Adventure.create(title: Faker::Book.title)
