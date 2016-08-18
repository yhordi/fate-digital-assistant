class Consequence < ActiveRecord::Base
  belongs_to :npc
  validates_presence_of :name, :severity, :shift_value
  validates :severity, inclusion: { in: ['mild', 'moderate', 'severe'] }
  validates :shift_value, inclusion: { in: [2, 4, 6] }


end
