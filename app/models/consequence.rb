class Consequence < ActiveRecord::Base
  belongs_to :npc
  validates_presence_of :name, :severity, :shift_value, :npc_id
  validates_uniqueness_of :severity, scope: :npc, unless: :mild?
  validates :severity, inclusion: { in: ['mild', 'moderate', 'severe'] }
  validates :shift_value, inclusion: { in: [2, 4, 6] }

  def mild?
    Npc.find(self.npc_id).mild?
  end
end
