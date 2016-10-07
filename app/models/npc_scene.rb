class NpcScene < ActiveRecord::Base
  belongs_to :npc
  belongs_to :scene
end
