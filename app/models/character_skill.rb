require 'max_stress_levels'
class CharacterSkill < ActiveRecord::Base
  include MaxStressLevels
  validates_presence_of :name, :npc_id
  validates_uniqueness_of :name, scope: :npc
  belongs_to :npc

  def calculate_max_stress
    return new_stress_level if stress_skill?
  end

  def new_stress_level
    new_level = MaxStressLevels::Low
    case
      when self.level == 1
        new_level = MaxStressLevels::Median
      when self.level.between?(2, 4)
        new_level = MaxStressLevels::High
      when self.level >= 5
        new_level = MaxStressLevels::Max
    end
    new_level
  end

  def will?
    self.name == 'Will'
  end

  def physique?
    self.name == 'Physique'
  end

  def stress_skill?
    self.name == "Physique" || self.name == "Will"
  end
end
