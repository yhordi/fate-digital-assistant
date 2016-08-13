class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  belongs_to :system
  has_many :character_skills, dependent: :destroy
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable
  has_many :consequences

  def adjust_max_stress(skill)
    if skill.name == "Will"
      self.max_mental_stress = skill.calculate_max_stress
    elsif skill.name == "Physique"
      self.max_physical_stress = skill.calculate_max_stress
    end
    self.save
  end

  def reset_max_stress(skill)
    if skill.name == "Will"
      self.max_mental_stress = 2
    elsif skill.name == "Physique"
      self.max_physical_stress = 2
    end
    self.save
  end
end
