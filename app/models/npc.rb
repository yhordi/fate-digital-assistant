class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  belongs_to :system
  has_many :character_skills
  has_many :stunts
end
