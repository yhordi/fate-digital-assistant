class Consequence < ActiveRecord::Base
  belongs_to :npc
  validates_presence_of :name, :severity, :description
end
