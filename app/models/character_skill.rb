class CharacterSkill < ActiveRecord::Base
  validates_presence_of :name
  belongs_to :npc
end
