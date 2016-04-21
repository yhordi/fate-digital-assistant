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
  end
end
