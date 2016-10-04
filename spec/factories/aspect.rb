FactoryGirl.define do
  factory :aspect do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    aspectable_id { 1 }
    aspectable_type {'Npc'}
  end
end
