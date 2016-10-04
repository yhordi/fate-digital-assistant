FactoryGirl.define do
  factory :will, class: CharacterSkill do
    name { 'Will' }
    level { 1 }
    npc_id { 1 }
  end
end
