FactoryGirl.define do
  factory :skill do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    system_id { 1 }
    overcome {Faker::Lorem.paragraph}
    advantage {Faker::Lorem.paragraph}
    attack {Faker::Lorem.paragraph}
    defend {Faker::Lorem.paragraph}
  end
end
