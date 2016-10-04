FactoryGirl.define do
  factory :system do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    user_id { 1 }
  end
end
