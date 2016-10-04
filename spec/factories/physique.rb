FactoryGirl.define do
  factory :physique, class: CharacterSkill do
    name { 'Physique' }
    level { 1 }
    npc_id { 1 }
  end
end
