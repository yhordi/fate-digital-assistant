class Consequence < ActiveRecord::Base
  belongs_to :npc
  validates_presence_of :name, :severity
  validates :severity, inclusion: { in: ['mild', 'moderate', 'severe'] }
end
