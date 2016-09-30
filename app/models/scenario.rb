class Scenario < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: true
  belongs_to :system
end
