class Scenario < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: true
  belongs_to :system
  has_many :aspects, as: :aspectable
  has_many :scenes, dependent: :destroy
end
