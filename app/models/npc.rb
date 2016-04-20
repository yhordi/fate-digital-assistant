class Npc < ActiveRecord::Base
  NPC_TYPES = ['Main', 'Supporting', 'Nameless']

  validates :name, :npc_type, presence: true
  has_many :skills
  belongs_to :system

  def self.npc_types
    NPC_TYPES
  end
end
