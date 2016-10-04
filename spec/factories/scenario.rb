FactoryGirl.define do
  factory :scenario do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph}
    system_id { 1 }
  end
end
