class CharacterSkill < ActiveRecord::Base
  validates_presence_of :name
  belongs_to :npc
  before_save :calculate_max_stress

  def calculate_max_stress
    return new_stress_level if stress_skill?
  end

   def new_stress_level
    new_level = 2
    case
      when self.level == 1
        new_level = 3
      when self.level.between?(2, 4)
        new_level = 4
      when self.level >= 5
        new_level = 5
    end
    new_level
  end

  def stress_skill?
    self.name == "Physique" || self.name == "Will"
  end
end
