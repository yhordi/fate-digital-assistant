class Stunt < ActiveRecord::Base
  validates_presence_of :name, :description
  belongs_to :npc
end
