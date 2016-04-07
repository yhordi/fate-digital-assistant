class System < ActiveRecord::Base
  include DefaultSkillsHelper
  belongs_to :user
  has_many :skills
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true
  validates :user_id, presence: true

  def default_skills(params)
    p "in default_skills"
    p params
    if params["system"]["default_set"] == "true"
      seed_defaults(self.id, DefaultSkillsHelper.defaults(params["id"]))
    end
  end

  def seed_defaults(system_id, defaults)
    p "seeding defaults"
    defaults.each do |skill|
      p "seeding #{skill[:name]}"
      new_skill = Skill.new(skill)
      new_skill.system_id = system_id
      new_skill.save!
    end
  end
end
