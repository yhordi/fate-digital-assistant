class Stunt < ActiveRecord::Base
  validates_presence_of :name, :description, :npc_id
  belongs_to :npc
end
