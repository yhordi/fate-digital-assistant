class Npc < ActiveRecord::Base
  class ConsequenceLimit < ActiveModel::Validator
    def validate(npc)
      if npc.consequences.length > 4
        npc.errors[:consequence] << 'Cannot have more than 4 consequences'
      end
    end
  end

  class SevereLimit < ActiveModel::Validator
    def validate(npc)
      npc.consequences.each do |consequence|
        if consequence.severity == 'severe'
          npc.errors[:consequence] << 'cannot have more than one severe consequence'
        end
      end
    end
  end

  validates :name, :npc_type, presence: true
  validates_uniqueness_of :name, scope: :system
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  validates_with ConsequenceLimit
  validates_with SevereLimit
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
