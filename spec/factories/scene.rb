FactoryGirl.define do
  factory :scene do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    scenario_id { 1 }
  end
end

