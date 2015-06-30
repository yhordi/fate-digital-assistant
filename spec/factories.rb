FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    password { Faker::Lorem.word }
  end
  factory :system do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    user_id { 1 }
  end

end