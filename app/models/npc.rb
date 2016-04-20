class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  has_many :skills
  belongs_to :system

  def self.npc_types
    ['Main', 'Supporting', 'Nameless']
  end
end
