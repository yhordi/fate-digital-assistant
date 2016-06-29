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
  factory :skill do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    system_id { 1 }
    overcome {Faker::Lorem.paragraph}
    advantage {Faker::Lorem.paragraph}
    attack {Faker::Lorem.paragraph}
    defend {Faker::Lorem.paragraph}
  end
  factory :npc do
    name { Faker::Name.name }
    background { Faker::Lorem.paragraph }
    system_id { 1 }
    npc_type { "Main" }
    mental_stress { 0 }
    physical_stress { 0 }
    max_mental_stress { 2 }
    max_physical_stress { 2 }
  end
  factory :character_skill do
    name { Faker::Lorem.word }
    level { 1 }
    npc_id { 1 }
  end
  factory :stunt do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    npc_id { 1 }
  end
  factory :aspect do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph}
    aspectable_id { 1 }
    aspectable_type {'Npc'}
  end
end
