FactoryGirl.define do
  factory :npc do
    name { Faker::Name.name }
    background { Faker::Lorem.paragraph }
    system_id { 1 }
    npc_type { "Main" }
    mental_stress { 0 }
    physical_stress { 1 }
    max_mental_stress { 2 }
    max_physical_stress { 2 }
  end
end
