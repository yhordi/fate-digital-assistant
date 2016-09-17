class Skill < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true
  validates_uniqueness_of :name, scope: :system_id

  def self.names(system_id)
    names = []
    Skill.where(system_id: system_id).each do |skill|
      names << skill.name
    end
    names
  end
end
