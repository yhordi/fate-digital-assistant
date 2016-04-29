class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  belongs_to :system
end
