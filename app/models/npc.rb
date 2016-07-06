class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  belongs_to :system
  has_many :character_skills, dependent: :destroy, after_add: :calculate_max_stress
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable

  def calculate_max_stress(npc)
    skills = [
                {name: "Will",
                 stress_type: self.max_mental_stress},
                {name: "Physique",
                 stress_type: self.max_physical_stress}
              ]
    skills.map do |skill|
      character_skill = self.character_skills.find_by(name: skill[:name])
      if skill_and_stress_valid?(character_skill, skill[:stress_type])
        args = {
                character_skill: character_skill,
                name: skill[:name],
                stress_type: skill[:stress_type]
               }
        max_stress_math(args)
      end
    end
  end

  def reset_max(stress)
    if stress == "Physique"
      self.max_physical_stress = 2
    elsif stress == "Will"
      self.max_mental_stress = 2
    end
  end

  def skill_and_stress_valid?(character_skill, stress_level)
    has_skill?(character_skill) && self.stress_maxed?(stress_level) == false
  end

  def has_skill?(character_skill)
    return false if character_skill == nil
    true
  end

  def stress_maxed?(max_stress)
    return true if max_stress >= 5
    false
  end


  def max_stress_math(options)
    args = {
      new_level: nil,
      name: options[:name],
      character_skill: options[:character_skill]
    }
    case
      when options[:character_skill].level == 1
        args[:new_level] = 3
        adjust_max_stress(args)
      when options[:character_skill].level.between?(2, 4)
        args[:new_level] = 4
        adjust_max_stress(args)
      when options[:character_skill].level == 5
        args[:new_level] = 5
        adjust_max_stress(args)
    end
  end

  def adjust_max_stress(options)
    if options[:name] == "Physique"
      self.max_physical_stress = options[:new_level]
    else
      self.max_mental_stress = options[:new_level]
    end
  end
end
