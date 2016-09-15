class Npc < ActiveRecord::Base
  class ConsequenceLimit < ActiveModel::Validator
    def validate(npc)
      if npc.consequences.length > 4
        npc.errors[:consequence] << 'Cannot have more than 4 consequences'
      end
    end
  end

  validates :name, :npc_type, :system_id, presence: true
  validates_uniqueness_of :name, scope: :system
  validates :max_physical_stress, :max_mental_stress, inclusion: 1..5
  validates_with ConsequenceLimit
  belongs_to :system
  has_many :character_skills, dependent: :destroy
  has_many :stunts, dependent: :destroy
  has_many :aspects, as: :aspectable
  has_many :consequences, before_add: :consequence_limit_validation

  def consequence_limit
    ConsequenceLimit.new
  end

  def consequence_limit_validation(npc)
    consequence_limit.validate(self)
  end

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

  def mild?
    unless self.consequences.last == nil
      self.consequences.last.severity == 'mild'
    end
  end
end
