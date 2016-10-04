FactoryGirl.define do
  factory :consequence do
    name { Faker::Lorem.sentence }
    severity { "mild" }
    shift_value { 2 }
    npc_id { 1 }
  end
end
