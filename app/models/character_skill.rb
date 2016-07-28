class CharacterSkill < ActiveRecord::Base
  validates_presence_of :name
  belongs_to :npc

  def calculate_max_stress(skill_level)
    if stress_skill?
      return new_stress_level(skill_level)
    end
  end

   def new_stress_level(skill_level)
    new_level = 2
    case
      when skill_level == 1
        new_level = 3
      when skill_level.between?(2, 4)
        new_level = 4
      when skill_level >= 5
        new_level = 5
    end
    new_level
  end

  def stress_skill?
    self.name == "Physique" || self.name == "Will"
  end
end
