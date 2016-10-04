FactoryGirl.define do
  factory :scenario do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph}
  end
end
