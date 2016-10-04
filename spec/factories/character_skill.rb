FactoryGirl.define do
  factory :character_skill do
    name { Faker::Lorem.word }
    level { 1 }
    npc_id { 1 }
  end
end
