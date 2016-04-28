class NpcSkill < ActiveRecord::Base
  belongs_to :npc
  belongs_to :skill
end
