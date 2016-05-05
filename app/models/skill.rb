class Skill < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true

  def self.names(system_id)
    names = []
    Skill.where(system_id: system_id).each do |skill|
      names << skill.name
    end
    names
  end
end
