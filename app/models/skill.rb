class Skill < ActiveRecord::Base
  belongs_to :system
  validates :name, presence: true
end
