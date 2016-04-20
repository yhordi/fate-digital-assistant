class System < ActiveRecord::Base
  include DefaultSkillsHelper
  belongs_to :user
  has_many :skills
  has_many :npcs
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true
  validates :user_id, presence: true

  def default_skills(params)
    return seed_defaults(self.id, DefaultSkillsHelper.defaults(params["id"])) if params["system"]["default_set"] == "true"
  end

  def seed_defaults(system_id, defaults)
    defaults.each do |skill|
      p "seeding #{skill[:name]}"
      new_skill = Skill.new(skill)
      new_skill.system_id = system_id
      new_skill.save!
    end
  end
end
