class Npc < ActiveRecord::Base
  validates :name, :npc_type, presence: true
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  belongs_to :system
  has_many :character_skills, dependent: :destroy, after_add: :adjust_max_stress
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable

  def adjust_max_stress(npc)
    self.character_skills.each do |skill|
      return nil if skill.name != "Will" || skill.name != "Physique"
      if skill.name == "Will"
        self.max_mental_stress = skill.new_stress_level
      elsif skill.name == "Physique"
        self.max_physical_stress = skill.new_stress_level
      end
    self.save
    end
  end
end
