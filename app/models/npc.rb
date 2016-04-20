class Npc < ActiveRecord::Base
  validates :name, :type, presence: true

  has_many :skills
  belongs_to :system

  def self.types
    ['Main', 'Supporting', 'Nameless']
  end
end
