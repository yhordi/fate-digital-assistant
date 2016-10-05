FactoryGirl.define do
  factory :npc_aspect, class: Aspect do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    aspectable_id { 1 }
    aspectable_type {'Npc'}
  end
end
