class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  has_many :npc_skills
  has_many :skills, through: :npc_skills
  belongs_to :system
end
