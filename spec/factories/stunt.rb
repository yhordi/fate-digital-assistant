FactoryGirl.define do
  factory :stunt do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    npc_id { 1 }
  end
end
