class Scene < ActiveRecord::Base
  validates :name, :description, presence: true
  validates :name, uniqueness: true
  belongs_to :scenario
  has_many :npcs
  has_many :aspects, as: :aspectable
end
