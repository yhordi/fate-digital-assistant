class Skill < ActiveRecord::Base
  belongs_to :system
  has_many :npc_skills
  has_many :npcs, through: :npc_skills
  validates :name, presence: true
end
