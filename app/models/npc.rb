class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  belongs_to :system
  has_many :character_skills, dependent: :destroy
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable

  def calculate_max_stress
    skills = ["Will", "Physique"]
    skills.map do |skill|
      character_skill = self.character_skills.find_by(name: skill)
      return max_stress_math(character_skill) if has_skill?(character_skill)
    end
  end

  def has_skill?(character_skill)
    return false if character_skill == nil
    true
  end

  def max_stress_math(character_skill)
    case
      when character_skill.level == 1
        adjust_max_stress(1, character_skill)
      when character_skill.level >= 2 && character_skill.level <= 4
        adjust_max_stress(2, character_skill)
      when character_skill.level == 5
        adjust_max_stress(3, character_skill)
    end
  end

  def adjust_max_stress(value, character_skill)
    return self.max_physical_stress += value if character_skill.name == "Physique"
    self.max_mental_stress += value
  end
end
